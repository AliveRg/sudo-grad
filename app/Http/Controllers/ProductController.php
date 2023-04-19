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
    public function Product() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductOne', compact('products'));
        
    }
    public function ProductTwo() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductTwo', compact('products'));
        
    }
  
    public function ProductThree() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductThree', compact('products'));
        
    }
    public function ProductFour() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductFour', compact('products'));
        
    }
    public function ProductFive() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductFive', compact('products'));
        
    }
    public function ProductSix() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductSix', compact('products'));
        
    }

   


}
