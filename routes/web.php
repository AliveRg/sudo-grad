<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/






Route::get('/', [ProductController::class, 'index']) -> name('page_home');
Route::get('/about', [ProductController::class, 'about']) -> name('page_about');




Auth::routes();

Route::get('/auth', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
