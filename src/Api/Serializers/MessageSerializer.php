<?php

namespace Neoncube\FlarumPrivateMessages\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Neoncube\FlarumPrivateMessages\Message;

class MessageSerializer extends AbstractSerializer
{
    protected $type = 'messages';

    protected function getDefaultAttributes($message)
    {
        if (!($message instanceof Message)) {
            throw new \InvalidArgumentException(
                get_class($this).' can only serialize instances of '.Message::class
            );
        }

        return [
            'message' => (bool) !$message->is_hidden ? $message->message : '',
            'userId' => $message->user_id,
            'isHidden' => $message->is_hidden,
            'createdAt' => $this->formatDate($message->created_at),
            'conversationId' => $message->conversation_id,
            'number' => $message->number,
        ];
    }

    protected function user($message)
    {
        return $this->hasOne($message, UserSerializer::class);
    }
}
