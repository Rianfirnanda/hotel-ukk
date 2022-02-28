<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemesanan extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
            'kamar_id',
            'tanggal_checkin',
            'tanggal_checkout',
            'jumlah_kamar_dipesan',
            'nama_pemesan',
            'email_pemesan',
            'no_hp',
            'nama_tamu',
            'status_pemesanan',
            'tanggal_pesan',
            'kode_pemesanan',
    ];
}
