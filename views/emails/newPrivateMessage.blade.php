{!! $translator->trans('neoncube-private-messages.forum.notifications.email.new_private_message.body', [
    '{user}' => $blueprint->user->display_name,
    '{message}' => $blueprint->message->message,
    '{url}' => $url->to('forum')->route('neoncube-private-messages.messages', ['id' => $blueprint->message->conversation_id, 'number' => $blueprint->message->number])
]) !!}
