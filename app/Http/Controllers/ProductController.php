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
        $cases = DB::table('cases') 
        -> get();
        $products = DB::table('products') 
        -> get();
        return Inertia::render('Cases', compact('cases', 'products'));
    }
    public function CaseOne() {
        $cases = DB::table('cases') 
        -> get();
        $products = DB::table('products') 
        -> get();
        return Inertia::render('Cases1', compact('cases', 'products'));
    }


}
