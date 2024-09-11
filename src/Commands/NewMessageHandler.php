<?php

namespace Neoncube\FlarumPrivateMessages\Commands;

use Flarum\Notification\NotificationSyncer;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use http\Message\Parser;
use Neoncube\FlarumPrivateMessages\Conversation;
use Neoncube\FlarumPrivateMessages\ConversationUser;
use Neoncube\FlarumPrivateMessages\Message;
use Neoncube\FlarumPrivateMessages\Notifications\NewPrivateMessageBlueprint;
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

        if (!$conversation->recipients()->where('user_id', $actor->id)->get())
            throw new PermissionDeniedException;

        $conversation->increment('total_messages');

        $message = Message::newMessage($data['attributes']['messageContents'], $actor->id, $conversation->id);

        $message->number = $conversation->total_messages;
        $message->save();

        foreach (ConversationUser::where('conversation_id', $conversation->id)->pluck('user_id')->all() as $userId) {
            if($userId === $actor->id)
                continue;

            $recipient = User::find($userId);

            $recipient->increment('unread_messages');

            $this->pushNewMessage($message, $conversation->id);
            $this->sendNewMessageNotification($message, $conversation, $actor, $recipient);
        }

        return $message;
    }

    public function pushNewMessage($message, $conversationId)
    {
        if (app()->bound(Pusher::class)) {
            app(Pusher::class)->trigger('private-user' . $message->user_id, 'newMessage', [
                'id' => $message->id,
                'message' => $message->message,
                'createdAt' => (new \DateTime($message->created_at))->format(\DateTime::RFC3339),
                'conversationId' => $conversationId
            ]);
        }
    }

    public function sendNewMessageNotification($message, $conversation, $actor, $recipient) {
        if(!$recipient->can('neoncube-private-messages.allowUsersToReceiveEmailNotifications'))
            return;

        $this->notifications->sync(
            new NewPrivateMessageBlueprint($message, $conversation, $actor),
            [$recipient]
        );
    }
}
