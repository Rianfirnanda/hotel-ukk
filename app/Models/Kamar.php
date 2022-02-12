<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kamar extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nama_kamar', 'jumlah_kamar', 'harga_kamar', 'deskripsi_kamar', 'foto_kamar'
    ];

    public function fasilitas_kamar()
    {
        return $this->hasMany('App\Models\Fasilitas_kamar');
    }
}
