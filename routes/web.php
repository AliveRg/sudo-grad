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



Route::get('/',[ ProductController::class, 'index'] )->name('dashboard');
// Route::get('/dashboard/cases', function () {
//     return Inertia::render('notPage');} )->name('cases');
// Route::get('/cases/1',[ CasesController::class, 'CaseOne'] )->name('cases1');




// Route::get('/dashboard/about', function () {
//     return Inertia::render('About');
// })->name('about');

Route::get('/dashboard/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard/contact/privacy',function () {
    return Inertia::render('Privacy');
})->name('privacy');
Route::get('/dashboard/Page1',[ ProductController::class, 'Product'] )->name('products1');
Route::get('/dashboard/Page2',[ ProductController::class, 'ProductTwo'] )->name('products2');
Route::get('/dashboard/Page3',[ ProductController::class, 'ProductThree'] )->name('products3');
Route::get('/dashboard/Page4',[ ProductController::class, 'ProductFour'] )->name('products4');
Route::get('/dashboard/Page5',[ ProductController::class, 'ProductFive'] )->name('products5');
Route::get('/dashboard/Page6',[ ProductController::class, 'ProductSix'] )->name('products6');
// Route::get('/dashboard/test',[ ProductController::class, 'test'] )->name('test');
// Route::get('/2',[ ProductController::class, 'ProductTwo'] )->middleware(['auth', 'verified'])->name('products2');  странинца для зарегестрированного пользователя



require __DIR__.'/auth.php';
