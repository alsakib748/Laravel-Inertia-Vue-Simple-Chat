<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;
use App\Http\Resources\MessageResource;

class MessageController extends Controller
{
    public function index(Room $room)
    {
        $messages = $room->messages()->with('user')->latest()->paginate(50);

        return MessageResource::collection($messages);
    }
}
