<?php

namespace Neoncube\FlarumPrivateMessages\Api\Controllers;

use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Neoncube\FlarumPrivateMessages\Commands\StartConversation;
use Neoncube\FlarumPrivateMessages\Api\Serializers\ConversationSerializer;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateConversationController extends AbstractCreateController
{
    public $serializer = ConversationSerializer::class;

    public $include = [
        'messages',
        'recipients',
        'recipients.user'
    ];

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        $conversation = $this->bus->dispatch(
            new StartConversation($actor, Arr::get($request->getParsedBody(), 'data', []))
        );

        return $conversation;
    }
}