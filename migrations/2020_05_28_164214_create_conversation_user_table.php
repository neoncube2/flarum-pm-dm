<?php

use Flarum\Database\Migration;
Use Illuminate\Database\Schema\Blueprint;

return Migration::createTableIfNotExists('conversation_user', function (Blueprint $table) {
    $table->increments('id');
    $table->integer('conversation_id')->unsigned();
    $table->integer('user_id')->unsigned();

    $table->integer('last_read_message_number')->unsigned()->default(0);
    $table->datetime('last_read_at')->nullable();;

    $table->foreign('conversation_id')->references('id')->on('conversations')->onDelete('cascade');
    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
});