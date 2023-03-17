<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => $this ->faker->randomDigitNot(5),
            'name' => $this ->faker->realText($maxNbChars = 5),
            'title' => $this ->faker->realText($maxNbChars = 25),
            'content' => $this ->faker->text($maxNbChars = 100),
            'price'=> $this ->faker->numberBetween($min = 1000, $max = 12000),
            'image_path' => $this ->faker->imageUrl($width = 640, $height = 480),
        ];
    }
    protected $model = Cases::class;
}
