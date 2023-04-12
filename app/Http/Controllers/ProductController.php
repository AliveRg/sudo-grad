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
    public function indProduct() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductOne', compact('products'));
        
    }
    public function indProductTwo() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductTwo', compact('products'));
        
    }
  
    public function indProductThree() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductThree', compact('products'));
        
    }
    public function indProductFour() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductFour', compact('products'));
        
    }
    public function indProductFive() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductFive', compact('products'));
        
    }
    public function indProductSix() 
    {
        $products = DB::table('products') 
        -> get();
        // dd($products);
        return Inertia::render('ProductSix', compact('products'));
        
    }

   


}
