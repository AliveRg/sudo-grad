<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|---------------0------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),

    ]);
})->name('welcome');

Route::get('/dashboard',[ ProductController::class, 'index'] )->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/products/{id}',[ ProductController::class, 'pug'] )->middleware(['auth', 'verified'])->name('products');


Route::get('/about', function () {
    return Inertia::render('About');
})->middleware(['auth', 'verified'])->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->middleware(['auth', 'verified'])->name('contact');

Route::get('/cases', function () {
    return Inertia::render('Cases');
})->middleware(['auth', 'verified'])->name('cases');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
