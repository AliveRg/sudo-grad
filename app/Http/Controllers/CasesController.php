<?php

namespace App\Http\Controllers;
use App\Models\Cases;
use Inertia\Inertia;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class CasesController extends Controller
{
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
