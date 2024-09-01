<?php

namespace Neoncube\FlarumPrivateMessages;

use Flarum\Api\Controller;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\User\User;
use Neoncube\FlarumPrivateMessages\Api\Controllers;
use Neoncube\FlarumPrivateMessages\Api\Serializers\ConversationRecipientSerializer;
use Neoncube\FlarumPrivateMessages\Api\Serializers\MessageSerializer;
use Neoncube\FlarumPrivateMessages\Notifications\NewPrivateMessageBlueprint;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/extension.less')
        ->route('/messages/{id}', 'neoncube-private-messages.messages')
        ->route('/conversations', 'neoncube-private-messages.conversations'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    // (new Extend\Model(User::class))
    //     ->hasMany('conversations', ConversationUser::class, 'user_id'),
    (new Extend\Routes('api'))
        ->get('/neoncube-private-messages/conversations', 'neoncube-private-messages.conversations.index', Controllers\ListConversationsController::class)
        ->get('/neoncube-private-messages/messages/{id}', 'neoncube-private-messages.messages.list', Controllers\ListMessagesController::class)
        ->post('/neoncube-private-messages/conversations', 'neoncube-private-messages.conversations.create', Controllers\CreateConversationController::class)
        ->post('/neoncube-private-messages/messages', 'neoncube-private-messages.messages.create', Controllers\CreateMessageController::class)
        ->post('/neoncube-private-messages/messages/typing', 'neoncube-private-messages.message.typing', Controllers\TypingPusherController::class)
        ->post('/neoncube-private-messages/messages/read', 'neoncube-private-messages.message.read', Controllers\ReadMessageController::class)
        ->delete('/neoncube-private-messages/messages{id}', 'neoncube-private-messages.messages.delete', Controllers\DeleteMessageController::class)
        //->patch('/messages/{id}', 'messages.update', Controllers\UpdateMessageController::class)
        //->delete('/messages/{id}', 'messages.delete', Controllers\DeleteMessageController::class)
        ->get('/neoncube-private-messages/conversations/{id}', 'neoncube-private-messages.conversations.show', Controllers\ShowConversationController::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('canMessage', function (ForumSerializer $serializer) {
            return $serializer->getActor()->can('startConversation');
        }),

    (new Extend\ApiSerializer(CurrentUserSerializer::class))
        ->attribute('unreadMessages', function (CurrentUserSerializer $serializer) {
            return $serializer->getActor()->unread_messages;
        }),

    (new Extend\Settings())
        ->serializeToForum('neoncubePrivateMessagesReturnKey', 'neoncube-private-messages.return_key', function ($value) {
            return (bool)$value;
        }),
    // (new Extend\ApiSerializer(CurrentUserSerializer::class))
    //     ->hasMany('conversations', ConversationRecipientSerializer::class),

    // (new Extend\ApiController(Controller\ListUsersController::class))
    //     ->addInclude('conversations'),
    // (new Extend\ApiController(Controller\ShowUserController::class))
    //     ->addInclude('conversations'),
    // (new Extend\ApiController(Controller\CreateUserController::class))
    //     ->addInclude('conversations'),
    // (new Extend\ApiController(Controller\UpdateUserController::class))
    //     ->addInclude('conversations'),
    (new Extend\Notification())
        ->type(NewPrivateMessageBlueprint::class, MessageSerializer::class, ['alert', 'email']),
    (new Extend\View)
        ->namespace('flarum-private-messages', __DIR__.'/views'),
];
