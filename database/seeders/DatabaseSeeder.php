<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Cases;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(PostTableSeeder::class);
        $this->command->info('Таблица постов блога загружена данными!');
        // Cases::factory(50) -> create(); 
    }
}
