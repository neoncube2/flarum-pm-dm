<?php

namespace Neoncube\FlarumPrivateMessages\Commands;

use Flarum\User\User;

class ReadMessage
{
    public $actor;
    public $data;
    
    public function __construct(User $actor, array $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}
