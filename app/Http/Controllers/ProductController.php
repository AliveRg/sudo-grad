<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Inertia\Inertia;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('Dashboard', compact('products'));
        
    }

    public function pug() {
        $products = DB::table('products') 
        -> get();
        return Inertia::render('Product', compact('products'));
    }


}
