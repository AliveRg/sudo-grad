<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Cases;

use DB;

class CasesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cases = [
            [
            'product_id' => '1',
            'name' => 'Bob',
            'title' => 'title dfssd sdfewd sdf sdfew',
            'content' => 'content sdfklmlowe owienmldsmv ksdnmflk',
            'price' => '12.2',
            'time_line' => '2023-02-27',
            'image_path' => 'bg-section-8.png',
            ],
            [
            'product_id' => '2',
            'name' => 'Tom',
            'title' => 'title dfssfs adas d dassdfewd dsfsdf sdfew',
            'content' => 'content sdfklmldas sadowe owienmldsdfsmv ksdnmflk',
            'price' => '1234.3',
            'time_line' => '2024-11-17',
            'image_path' => 'bg-section-4.png',
            ],
            [
            'product_id' => '3',
            'name' => 'Jon',
            'title' => 'title asddgwefes wef assd af iyiluy sdfewd sdf sdfew',
            'content' => 'content sdfkasdfweber reyrtbdtrgfdasdas aedcqwef wtj67 ksdnmflk',
            'price' => '1236614.3',
            'time_line' => '2022-01-05',
            'image_path' => 'cases-image-3.png',
            ],
            [
            'product_id' => '4',
            'name' => 'Jon',
            'title' => 'title asddgwefes wesdfew',
            'content' => 'content sdfklmlasd dsv  enmldsmvfweber reyrtbdtrasvs  wtj67 ksdnmflk',
            'price' => '123984.3',
            'time_line' => '2022-03-05',
            'image_path' => 'houseservise.png',
            ],
            [
            'product_id' => '5',
            'name' => 'Jon',
            'title' => 'title asd iyiluy sdfe',
            'content' => 'content sdfasd ddder reyrtbdtrgfdf weasda wtj67 ksdnmflk',
            'price' => '1234114.4',
            'time_line' => '2022-04-05',
            'image_path' => 'zemelnye-spory.png',
            ],
            [
            'product_id' => '6',
            'name' => 'Jon',
            'title' => 'title asddefes weassd a',
            'content' => 'content sdfklmlasd s sfsdcsc fdbtrnfky f7 ksdnmflk',
            'price' => '1234114.5',
            'time_line' => '2022-05-05',
            'image_path' => 'data_work.png',
            ],
            [
            'product_id' => '7',
            'name' => 'Jon',
            'title' => 'title asddglsfsuy sdfew',
            'content' => 'content sdfklsdfsdf qwef wtj67sdfserfsvdsd sdfsdvvsnmflk',
            'price' => '1234114.6',
            'time_line' => '2022-06-05',
            'image_path' => 'cases-image-2.png',
            ],
            [
            'product_id' => '8',
            'name' => 'Jon',
            'title' => 'title asddgwefyiluy sdfewd sddfew',
            'content' => 'content sdfklmlowef sdvtrwe dju eber reyrtbdtrerwew sgjuighn ksdnmflk',
            'price' => '1234114.7',
            'time_line' => '2021-03-05',
            'image_path' => 'family-case.png',
            ],
            [
            'product_id' => '9',
            'name' => 'Jon',
            'title' => 'title asddefes wef siyil sdfewd sdf sdfew',
            'content' => 'content sdfkdsfvewr wsavdsver smvfweber reysdfa dftmrtynhgtlk',
            'price' => '1234114.8',
            'time_line' => '2022-06-15',
            'image_path' => 'cases-image-1.png',
            ],
            [
            'product_id' => '10',
            'name' => 'Jon',
            'title' => 'title asddgasda sdvavsdfew',
            'content' => 'content sdfkgqrb gfy r reyrtbdteb  efrqed cqw ef wtj67 ksdnmflk',
            'price' => '1234114.9',
            'time_line' => '2022-06-13',
            'image_path' => 'cases-image-1.png',
            ],
            [
            'product_id' => '11',
            'name' => 'Jon',
            'title' => 'title asddad adsadwq sd sdf sdfew',
            'content' => 'content sdwegwe fweber reyrtbdtrqgvwreb efrqedcqwef wtj67 ksdnmflk',
            'price' => '1239764.23',
            'time_line' => '2023-06-05',
            'image_path' => 'family-case.png',
            ],
            [
            'product_id' => '12',
            'name' => 'Jon',
            'title' => 'title asddadfes wesfjq sd sdf sdfew',
            'content' => 'content sdwegwe fweber reyrtbdtrqgvwreb efrqedcqwef wtj67 ksdnmflk',
            'price' => '12764.23',
            'time_line' => '2023-06-05',
            'image_path' => 'cases-image-3.png',
            ],
            [
            'product_id' => '13',
            'name' => 'Jon',
            'title' => 'title asndes wef adsadwq dfg dfew',
            'content' => 'content sdwegwe fweber reyrtbdtrqgvwreb efrqedcqwef wtj67 ksdnmflk',
            'price' => '123764.23',
            'time_line' => '2023-06-05',
            'image_path' => 'family-case.png',
            ],
            [
            'product_id' => '14',
            'name' => 'Jon',
            'title' => 'title asddaddg h adfn gjssadwq sd sdf sdfew',
            'content' => 'content sdwegwe fweber reyrtbdtrqgvwreb efrqedcqwef wtj67 ksdnmflk',
            'price' => '123.23',
            'time_line' => '2023-06-05',
            'image_path' => 'family-case.png',
            ],
            [
            'product_id' => '15',
            'name' => 'Jon',
            'title' => 'title asddadfes wef adsaderg fhmz',
            'content' => 'content sdwegwe fweber reyrtbdtrqgvwreb efrqedcqwef wtj67 ksdnmflk',
            'price' => '129764.23',
            'time_line' => '2023-06-05',
            'image_path' => 'cases-image-2.png',
            ],
            [
            'product_id' => '16',
            'name' => 'Jon',
            'title' => 'title asddadfes wef adsaeth qqqgfdv',
            'content' => 'content sdwegwe fweber reyrtbdtrqgvwreb efrqedcqwef wtj67 ksdnmflk',
            'price' => '239764.23',
            'time_line' => '2023-06-05',
            'image_path' => 'family-case.png',
            ],
            [
            'product_id' => '17',
            'name' => 'Jon',
            'title' => 'title aerh ergaewrher',
            'content' => 'content sdwegwe fweber reyrtbdtrqgvwreb efrqedcqwef wtj67 ksdnmflk',
            'price' => '39764.23',
            'time_line' => '2023-06-05',
            'image_path' => 'family-case.png',
            ],
            [
            'product_id' => '18',
            'name' => 'Jon',
            'title' => 'title asddadfes werg jgwew q sd sd',
            'content' => 'content sdwegwe fweber reyrtbdtrqgvwreb efrqedcqwef wtj67 ksdnmflk',
            'price' => '12394.23',
            'time_line' => '2023-06-05',
            'image_path' => 'cases-image-1.png',
            ],
        ];

        foreach($cases as $key => $value) {
            cases::create($value);
        }
    }
}
