<?php

namespace Neoncube\FlarumPrivateMessages\Api\Controllers;

use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Neoncube\FlarumPrivateMessages\Api\Serializers\MessageSerializer;
use Neoncube\FlarumPrivateMessages\Commands\NewMessage;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateMessageController extends AbstractCreateController
{
    public $serializer = MessageSerializer::class;

    public $include = ['user'];

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $data = Arr::get($request->getParsedBody(), 'data', []);

        $message = $this->bus->dispatch(
            new NewMessage($actor, $data)
        );

        return $message;
    }
}