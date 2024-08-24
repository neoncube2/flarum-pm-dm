<?php

namespace Neoncube\FlarumPrivateMessages\Notifications;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Neoncube\FlarumPrivateMessages\Message;

class PrivateMessageReceivedBlueprint implements BlueprintInterface
{
    public $message;
    public $messageText;
    public $conversation;
    public $user;

    public function __construct($message, $messageText, $conversation, $user)
    {
        $this->message = $message;
        $this->messageText = $messageText;
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
            'messageText' => $this->messageText,
            'conversation' => $this->conversation,
            'fromUser' => $this->user
        ];
    }

    public static function getType()
    {
        return 'privateMessageReceived';
    }

    public static function getSubjectModel()
    {
        return Message::class;
    }
}