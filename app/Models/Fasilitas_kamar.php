<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fasilitas_kamar extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'kamar_id', 'nama_fasilitas_kamar',
    ];

    public function kamar() {
        return $this->belongsTo('App\Models\Kamar');
    }
}
