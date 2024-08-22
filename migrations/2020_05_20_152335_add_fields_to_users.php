<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return Migration::addColumns('users', [
    'unread_messages' => ['integer']
]);