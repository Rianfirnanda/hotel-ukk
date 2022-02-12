<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = [
            [
                'nama' => 'Ibnu Syawal As-Salim',
                'username' => 'isywl',
                'password' => bcrypt('Admin12345'),
                'level' => 'administrator'
            ],
            [
                'nama' => 'Fahri Gunadi',
                'username' => 'fahri',
                'password' => bcrypt('Resep12345'),
                'level' => 'resepsionis'
            ],
            [
                'nama' => 'Arya Wijaya',
                'username' => 'arya',
                'password' => bcrypt('Arya12345'),
                'level' => 'tamu'
            ],
            [
                'nama' => 'Ikbal Wiguna',
                'username' => 'ikbal',
                'password' => bcrypt('Ikbal12345'),
                'level' => 'tamu'
            ],
        ];

        foreach ($admin as $v) {
            DB::table('admins')->insert($v);
        }
    }
}
