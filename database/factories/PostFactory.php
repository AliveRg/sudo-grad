<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;
use Faker\Generator as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       
            return [
                'author_id' => realText(rand(25, 30)),
                'title' => $this->faker->realText(rand(25, 30)),
                'excerpt' => $this->faker->realText(rand(100, 120)),
                'body' => $this->faker->realText(rand(200, 300)),
                'created_at' => $this->faker->dateTimeBetween('-60 days', '-30 days'),
                'updated_at' => $this->faker->dateTimeBetween('-20 days', '-1 days'),
        
            ];
    
    }
}
