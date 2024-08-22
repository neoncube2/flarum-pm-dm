<?php

use Flarum\Database\Migration;
Use Illuminate\Database\Schema\Blueprint;

return Migration::createTableIfNotExists('messages', function (Blueprint $table) {
    $table->increments('id');
    $table->text('message');
    $table->boolean('is_seen')->default(0);
    $table->boolean('is_hidden')->default(0);
    $table->integer('user_id');
    $table->integer('number')->unsigned();
    $table->integer('conversation_id');
    $table->timestamps();
});