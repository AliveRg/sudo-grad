<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CasesController;

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
Route::get('/cases',[ CasesController::class, 'pug'] )->middleware(['auth', 'verified'])->name('cases');
// Route::get('/cases/1',[ CasesController::class, 'CaseOne'] )->middleware(['auth', 'verified'])->name('cases1');




Route::get('/about', function () {
    return Inertia::render('About');
})->middleware(['auth', 'verified'])->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->middleware(['auth', 'verified'])->name('contact');
Route::get('/1',[ ProductController::class, 'indProduct'] )->middleware(['auth', 'verified'])->name('products1');
Route::get('/2',[ ProductController::class, 'indProductTwo'] )->middleware(['auth', 'verified'])->name('products2');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
