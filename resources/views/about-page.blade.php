@extends('layouts.app')

@section('content')

<header class="header">
		@include("header.header-p2")
</header>

<main class="main">
		@include("main.main-section-1")
		@include("main.main-section-2")
		@include("main.main-section-3")
		@include("main.main-section-4")
		@include("main.main-section-5")
		@include("main.main-section-6")
		@include("main.main-section-7")
		@include("main.main-section-8")
		@include("main.main-section-9")
</main>

<footer class="footer">
		@include("footer.footer")
</footer>



@endsection