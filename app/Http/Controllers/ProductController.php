<?php

namespace App\Http\Controllers;
use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index() 
    {
        // $products = DB::table('products') 
        // -> orderBy('id', 'desc')
        // -> get();
        // dd($products);
        $products = Product::limit(12)->get();

        return view('content-page-1', [
            'products' => $products
        ]);
    }

	public function about() {
		return view('about-page');

	
	}
}
