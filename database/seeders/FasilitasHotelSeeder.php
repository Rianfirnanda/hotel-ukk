<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class FasilitasHotelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fasilitasHotel = [
            [
                'nama_fasilitas_hotel' => 'Listrik',
                'foto_fasilitas_hotel' => '/img/fasilitas/fas_001.jpg',
                'deskripsi_fasilitas_hotel' => 'Hotel ini memiliki fasilitas Listrik'
            ],
            [
                'nama_fasilitas_hotel' => 'Kolam Panas',
                'foto_fasilitas_hotel' => '/img/fasilitas/fas_002.jpg',
                'deskripsi_fasilitas_hotel' => 'Hotel ini memiliki fasilitas Kolam Panas'
            ],
        ];

        foreach($fasilitasHotel as $v) {
            DB::table('fasilitas_hotels')->insert($v);
        }
    }
}
