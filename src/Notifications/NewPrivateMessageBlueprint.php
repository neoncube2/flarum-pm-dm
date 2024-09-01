<?php

namespace Neoncube\FlarumPrivateMessages\Notifications;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Notification\MailableInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Neoncube\FlarumPrivateMessages\Message;

class NewPrivateMessageBlueprint implements BlueprintInterface, MailableInterface
{
    public $message;
    public $conversation;
    public $user;

    public function __construct(Message $message, $conversation, $user)
    {
        $this->message = $message;
        $this->conversation = $conversation;
        $this->user = $user;
    }

    public function getSubject()
    {
        return $this->message;
    }

    public function getFromUser()
    {
        return $this->user;
    }

    public function getData()
    {
        return [
            'message' => $this->message,
            'conversation' => $this->conversation,
            'fromUser' => $this->user
        ];
    }

    public static function getType()
    {
        return 'newPrivateMessage';
    }

    public static function getSubjectModel()
    {
        return Message::class;
    }

    public function getEmailView()
    {
        // HTML?
        return ['text' => 'flarum-private-messages::emails.newPrivateMessage'];
    }

    public function getEmailSubject(TranslatorInterface $translator)
    {
        return $translator->trans('neoncube-private-messages.forum.notifications.email.new_private_message.subject', [
             '{user}' => $this->user->display_name
        ]);
    }
}