<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $Seeds = [
            AdminSeeder::class,
            KamarSeeder::class,
            FasilitasHotelSeeder::class,
            FasilitasKamarSeeder::class,
            PemesananSeeder::class,
        ];

        $this->call($Seeds);
    }
}
