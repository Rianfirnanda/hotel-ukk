<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class FasilitasKamarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fasilitasKamar = [
            [
                'kamar_id' => 1,
                'nama_fasilitas_kamar' => 'Pintu Otomatis'
            ],
            [
                'kamar_id' => 1,
                'nama_fasilitas_kamar' => 'Ruangan AC'
            ],
            [
                'kamar_id' => 2,
                'nama_fasilitas_kamar' => 'Pintu Otomatis'
            ],
            [
                'kamar_id' => 2,
                'nama_fasilitas_kamar' => 'Ruangan AC'
            ],
            [
                'kamar_id' => 3,
                'nama_fasilitas_kamar' => 'Pintu Otomatis'
            ],
            [
                'kamar_id' => 3,
                'nama_fasilitas_kamar' => 'Ruangan AC'
            ],
        ];

        foreach($fasilitasKamar as $v) {
            DB::table('fasilitas_kamars')->insert($v);
        }
    }
}
