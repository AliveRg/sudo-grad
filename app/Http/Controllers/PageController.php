<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
	public function index() {
		return view('content-page-1');

	
	}

	public function about() {
		return view('about-page');

	
	}
}
