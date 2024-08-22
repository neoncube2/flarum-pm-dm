<?php

namespace Neoncube\FlarumPrivateMessages\Notifications;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Post\Post;
use Flarum\User\User;

class PrivateMessageReceivedBlueprint implements BlueprintInterface
{
    public $post;

    public $user;

    public function __construct(Array $post, User $user)
    {
        $this->post = $post;
        $this->user = $user;

        print_r($this->post);
        die();
    }

    public function getSubject()
    {
        return $this->post;
    }

    public function getFromUser()
    {
        return $this->user;
    }

    public function getData()
    {
    }

    public static function getType()
    {
        return 'privateMessageReceived';
    }

    public static function getSubjectModel()
    {
        return Post::class;
    }
}