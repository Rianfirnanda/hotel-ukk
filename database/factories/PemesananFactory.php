<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PemesananFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $check_in = $this->faker->dateTimeBetween('-1 week', '+1 week');
        $check_out = date('Y-m-d', strtotime('+ '.rand(1,3). ' days', strtotime( $check_in->format('Y-m-d') ) ) );
        $create = date('Y-m-d H:i:s', strtotime('+ '.rand(1,3). ' days', strtotime( $check_in->format('Y-m-d') ) ) );
        $status = array('pesan', 'diterima', 'selesai', 'batal');
        return [
            'kamar_id' => rand(1, 2),
            'tanggal_checkin' => $check_in,
            'tanggal_checkout' => $check_out,
            'jumlah_kamar_dipesan' => rand(1, 2),
            'nama_pemesan' => $this->faker->name(),
            'email_pemesan' => $this->faker->freeEmail(),
            'no_hp' => $this->faker->phoneNumber(),
            'nama_tamu' => $this->faker->name(),
            'status_pemesanan' => $status[array_rand($status)],
            'tanggal_pesan' => date('Y-m-d H:i:s'),
        ];
    }
}
