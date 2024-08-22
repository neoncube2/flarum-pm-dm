<?php


namespace Neoncube\FlarumPrivateMessages;

use Flarum\Api\Controller;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\User\User;
use Neoncube\FlarumPrivateMessages\Api\Controllers;
use Neoncube\FlarumPrivateMessages\Api\Serializers\ConversationRecipientSerializer;
use Neoncube\FlarumPrivateMessages\Notifications\PrivateMessageReceivedBlueprint;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/extension.less')
        ->route('/private-messages/messages/{id}', 'private-messages.messages')
        ->route('/private-messages/conversations', 'private-messages.conversation'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Model(User::class))
        ->hasMany('conversations', ConversationUser::class, 'user_id'),
    (new Extend\Routes('api'))
        ->get('/private-messages/conversations', 'private-messages.conversations.index', Controllers\ListConversationsController::class)
        ->get('/private-messages/messages/{id}', 'private-messages.messages.list', Controllers\ListMessagesController::class)
        ->post('/private-messages/conversations', 'private-messages.conversations.create', Controllers\CreateConversationController::class)
        ->post('/private-messages/messages', 'private-messages.messages.create', Controllers\CreateMessageController::class)
        ->post('/private-messages/messages/typing', 'private-messages.message.typing', Controllers\TypingPusherController::class)
        ->post('/private-messages/messages/read', 'private-messages.message.read', Controllers\ReadMessageController::class)
        ->delete('/private-messages/messages{id}', 'private-messages.messages.delete', Controllers\DeleteMessageController::class)
        //->patch('/messages/{id}', 'messages.update', Controllers\UpdateMessageController::class)
        //->delete('/messages/{id}', 'messages.delete', Controllers\DeleteMessageController::class)
        ->get('/private-messages/conversations/{id}', 'private-messages.conversations.show', Controllers\ShowConversationController::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('canMessage', function (ForumSerializer $serializer) {
            return $serializer->getActor()->can('startConversation');
        }),

    (new Extend\ApiSerializer(CurrentUserSerializer::class))
        ->attribute('unreadMessages', function (CurrentUserSerializer $serializer) {
            return $serializer->getActor()->unread_messages;
        }),

    (new Extend\Settings())
        ->serializeToForum('privateMessagesReturnKey', 'private-messages.return_key', function ($value) {
            return (bool)$value;
        }),
    (new Extend\ApiSerializer(CurrentUserSerializer::class))
        ->hasMany('conversations', ConversationRecipientSerializer::class),

    (new Extend\ApiController(Controller\ListUsersController::class))
        ->addInclude('conversations'),
    (new Extend\ApiController(Controller\ShowUserController::class))
        ->addInclude('conversations'),
    (new Extend\ApiController(Controller\CreateUserController::class))
        ->addInclude('conversations'),
    (new Extend\ApiController(Controller\UpdateUserController::class))
        ->addInclude('conversations'),
    (new Extend\Notification())
        ->type(PrivateMessageReceivedBlueprint::class, MessageSerializer::class, ['alert', /*'email'*/]),
];
