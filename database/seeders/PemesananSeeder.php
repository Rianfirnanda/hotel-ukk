<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class PemesananSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pemesanan = [
            [
                'kamar_id' => 1,
                'admin_id' => 2,
                'tanggal_checkin' => '2022-01-27',
                'tanggal_checkout' => '2022-01-30',
                'jumlah_kamar_dipesan' => 1,
                'nama_pemesan' => 'Ikbal Maulana',
                'email_pemesan' => 'ikbal.maul@gmail.com',
                'no_hp' => '6285158511646',
                'nama_tamu' => 'Arya Winjaya',
                'status_pemesanan' => 'diterima',
                'kode_pemesanan' => '001',
                'tanggal_pesan' => '2022-01-25 16:32:14'
            ],
            [
                'kamar_id' => 2,
                'admin_id' => 3,
                'tanggal_checkin' => '2022-01-20',
                'tanggal_checkout' => '2022-01-23',
                'jumlah_kamar_dipesan' => 1,
                'nama_pemesan' => 'Bayu Dwi',
                'email_pemesan' => 'bayu.dwi@gmail.com',
                'no_hp' => '6287726897428',
                'nama_tamu' => 'Dafi Maulana',
                'status_pemesanan' => 'pesan',
                'kode_pemesanan' => '002',
                'tanggal_pesan' => '2022-01-18 09:14:21'
            ],
        ];

        foreach($pemesanan as $v) {
            DB::table('pemesanans')->insert($v);
        }
    }
}
