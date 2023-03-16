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
                'title' => 'Уголовные Дела',
                'content' => 'Никто не застрахован от неприятностей, связанных с уголовными делами. Не важно какой у вас статус свидетель, подозреваемый, потерпевший или кто угодно, закон дает право каждому на защиту от уголовного преследования и профессиональную правовую помощь.',
                'price'=> '80',
                'image_path' => 'ugolovnoe-delo.png',
            ],
            [ 

                'product_id' => '2',
                'title' => 'Наследственные Споры',
                'content' => 'Преимущество использования услуг адвоката по наследственным спорам состоит в том, что адвокат обладает знанием законов, опытом в практическом применении законов. Адвокат всегда в курсе актуальной судебной практики, что дает возможности анализа перспектив успешного решения вашего вопроса и выбора наиболее эффективной стратегии и тактики ведения дела.',
                'price'=> '90',
                'image_path' => 'nasledstv.png',

            ],

            [
                'product_id' => '3',
                'title' => 'Жилищные Споры',
                'content' => 'Жилищные споры - конфликтные ситуации, которые возникают между физическими и юридическими лицами по поводу нарушения их прав на владение, распоряжение и использование жилыми помещениями. Адвокат по жилищным вопросам в Белгороде поможет урегулировать конфликт.',
                'price'=> '1200',
                'image_path' => 'houseservise.png',
            ],
            [
                'product_id' => '4',
                'title' => 'Арбитражные Споры',
                'content' => 'Одной из проблем в коммерческой деятельности организаций и предпринимателей является нарушение договорных обязательств одной из сторон, что приводит к столкновению интересов, и как следствие к арбитражному спору. Адвокат поможет в вопросах с арбитражным спором.',
                'price'=> '1200',
                'image_path' => 'arbitraj.png',
            ],
            [
                'product_id' => '5',
                'title' => 'Семейные Споры',
                'content' => 'Адвокат по семейным спорам  – специалист, который может оказать профессиональную правовую помощь в спорах между супругами. Кроме споров между супругами, не редко граждане обращаются к семейному адвокату за защитой своих прав в отношениях между: родителями и детьми, усыновителями и усыновленными, между матерью и отцом ребенка по его воспитанию, развитию и содержанию.',
                'price'=> '1200',
                'image_path' => 'family-case.png',
            ],
            [
                'product_id' => '6',
                'title' => 'Земельные Споры',
                'content' => 'Адвокатская помощь  по земельным и иным спорам в сфере недвижимости, предварительные анализ доказательств и оценка перспектив судебного земельного спора, разработка плана действий для успешного решения земельного вопроса, консультации по земельным делам.',
                'price'=> '1200',
                'image_path' => 'zemelnye-spory.png',
            ],
            

        ];

        foreach($products as $key => $value) {
            Product::create($value);
        }
        // это почему-то не работает. php artisan db:seed 

    }
}
