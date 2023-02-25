<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

use DB;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'product_id' => '1',
                'title' => 'Business Law',
                'content' => 'There are many variations of passages
                of Lorem Ipsum available, but majority 
                going to use a passage.',
                'price'=> '80',
                'image_path' => 'Empty',
            ],
            [ 

                'product_id' => '2',
                'title' => 'Construction Law',
                'content' => 'There are many variations of passages
                of Lorem.',
                'price'=> '90',
                'image_path' => 'Empty',

            ],

            [
                'product_id' => '3',
                'title' => 'Car Accident',
                'content' => ' But majority 
                going to use a passage.',
                'price'=> '1200',
                'image_path' => 'Empty',
            ],

        ];

        foreach($products as $key => $value) {
            Product::factory() -> create($value);
        }
        // это почему-то не работает. php artisan db:seed 

    }
}
