<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class KamarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kamar = [
            [
                'nama_kamar' => 'Kamar Satu',
                'foto_kamar' => '/img/kamar1.jpg',
                'jumlah_kamar' => 2,
                'harga_kamar' => 150000,
                'deskripsi_kamar' => 'ini sample data kamar satu'
            ],
            [
                'nama_kamar' => 'Kamar Dua',
                'foto_kamar' => '/img/kamar2.jpg',
                'jumlah_kamar' => 4,
                'harga_kamar' => 156000,
                'deskripsi_kamar' => 'ini sample data kamar dua'
            ],
            [
                'nama_kamar' => 'Kamar Tiga',
                'foto_kamar' => '/img/kamar3.jpg',
                'jumlah_kamar' => 6,
                'harga_kamar' => 236000,
                'deskripsi_kamar' => 'ini sample data kamar tiga'
            ],
            [
                'nama_kamar' => 'Kamar Empat',
                'foto_kamar' => '/img/kamar4.jpg',
                'jumlah_kamar' => 5,
                'harga_kamar' => 175000,
                'deskripsi_kamar' => 'ini sample data kamar empat'
            ],
        ];

        foreach($kamar as $v) {
            DB::table('kamars')->insert($v);
        }
    }
}
