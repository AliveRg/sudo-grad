<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('cases');
        Schema::create('cases', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id');
            $table->text('name');
            $table->string('title')->unique();
            $table->text('content');
            $table->integer('price');
            $table->date('time_line');
            $table->string('image_path');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cases');
    }
};
