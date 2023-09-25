<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\OrderController;

Route::resource('orders', OrderController::class)->only([
   'destroy',
   'show',
   'store',
   'update'
]);

Route::get('get_all', [OrderController::class, 'getAll']);