<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Http\Request;
use App\Models\Order;


class OrderController extends Controller
{
    public function getAll()
    {
        return Order::all();
    }

    public function store(Request $request)
    {
        $post = new Order;
        
        $post->woodenNumber = $request->woodenNumber;
        $post->orderState = $request->orderState;
        $post->orderStateLogs = $request->orderStateLogs;
        $post->menus = $request->menus;

        $post->save();

        return response()->json(["result" => "Stored Successfully! :)"], 201);
    }

    public function update(Request $request, $updateId)
   {
        $post = Order::find($updateId);
        $post->orderNumber = $request->orderNumber;
        $post->woodenNumber = $request->woodenNumber;
        $post->orderState = $request->orderState;
        $post->orderStateLogs = $request->orderStateLogs;
        $post->menus = $request->menus;
        $post->save();

        return response()->json(["result" => "Updated Successfully! :p"], 201);       
   }
    
    public function destroy($destroyId)
    {
     $destroy = Order::find($destroyId);
     $destroy->delete();

     return response()->json([
        "_id" => "$destroyId",
        "result" => "Destroyed Successfully! :D"
     ], 200);       
    }
}