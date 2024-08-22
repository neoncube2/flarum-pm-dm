<?php

use Flarum\Database\Migration;
Use Illuminate\Database\Schema\Blueprint;

return Migration::createTableIfNotExists('conversations', function (Blueprint $table) {
    $table->increments('id');
    $table->integer('total_messages');
    $table->timestamps();
});