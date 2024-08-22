<?php

namespace Neoncube\FlarumPrivateMessages\Api\Controllers;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Psr\Http\Message\ServerRequestInterface;
use Pusher;
use Tobscure\JsonApi\Document;

class TypingPusherController extends AbstractShowController
{
    public $serializer = BasicUserSerializer::class;

    public function data(ServerRequestInterface $request, Document $document)
    {
        $data = $request->getParsedBody();

        if (resolve('container')->bound(Pusher::class)) {
            resolve('container')->make(Pusher::class)->trigger('private-user' . $data['userId'], 'typing', [
                'conversationId' => $data['conversationId']
            ]);
        }

        return true;
    }
}
