<?php

namespace Neoncube\FlarumPrivateMessages\Commands;

use Flarum\Notification\NotificationSyncer;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use http\Message\Parser;
use Neoncube\FlarumPrivateMessages\Conversation;
use Neoncube\FlarumPrivateMessages\ConversationUser;
use Neoncube\FlarumPrivateMessages\Message;
use Neoncube\FlarumPrivateMessages\Notifications\PrivateMessageReceivedBlueprint;
use Pusher\Pusher;

class NewMessageHandler
{
    protected $notifications;

    public function __construct(NotificationSyncer $notifications)
    {
        $this->notifications = $notifications;
    }

    public function handle(NewMessage $command)
    {
        $actor = $command->actor;
        $data = $command->data;
        $conversationId = $command->conversationId;

        if ($conversationId) {
            $conversation = Conversation::find($conversationId);
        } else {
            $conversation = Conversation::find($data['attributes']['conversationId']);
        }

        if (!$conversation->recipients()->where('user_id', $actor->id)->get()) {
            throw new PermissionDeniedException;
        }

        $message = Message::newMessage($data['attributes']['messageContents'], $actor->id,
            $conversation->id);

        $conversation->increment('total_messages');

        $message->number = $conversation->total_messages;

        $message->save();

        foreach (ConversationUser::where('conversation_id', $conversation->id)->pluck('user_id')->all() as $userId) {
            User::find($userId)->increment('unread_messages');

            $messageText = json_decode($message->message);

            $this->pushNewMessage($message, $messageText, $conversation->id);
            $this->sendNewMessageNotification($message, $messageText, $conversation, $actor);
        }

        return $message;
    }

    public function pushNewMessage($message, $messageText, $conversationId)
    {
        if (app()->bound(Pusher::class)) {
            app(Pusher::class)->trigger('private-user' . $message->user_id, 'newMessage', [
                'id' => $message->id,
                'message' => $messageText,
                'createdAt' => (new \DateTime($message->created_at))->format(\DateTime::RFC3339),
                'conversationId' => $conversationId
            ]);
        }
    }

    public function sendNewMessageNotification($message, $messageText, $conversation, $actor) {
        $this->notifications->sync(
            new PrivateMessageReceivedBlueprint($message, $messageText, $conversation, $actor),
            [$message->user_id]
        );
    }
}
