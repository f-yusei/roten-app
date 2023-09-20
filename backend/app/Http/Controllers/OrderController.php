<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{

   public function store(Request $request)
   {
       $post = new Order;

       $post->menu = $request->menu;
       $post->arranges = $request->arranges;
       $post->orderState = $request->orderState;
       
       $post->save();

       return response()->json(["result" => "ok"], 201);
   }

}