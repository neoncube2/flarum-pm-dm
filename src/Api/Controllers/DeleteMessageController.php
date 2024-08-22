<?php

namespace Neoncube\FlarumPrivateMessages\Api\Controllers;

use Flarum\Api\Controller\AbstractDeleteController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Neoncube\FlarumPrivateMessages\Commands\HideMessage;
use Psr\Http\Message\ServerRequestInterface;

class DeleteMessageController extends AbstractDeleteController
{
    protected $bus;

    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    protected function delete(ServerRequestInterface $request)
    {
        $id = Arr::get($request->getQueryParams(), 'id');

        $actor = $request->getAttribute('actor');

        $this->bus->dispatch(
            new HideMessage($id, $actor)
        );
    }
}