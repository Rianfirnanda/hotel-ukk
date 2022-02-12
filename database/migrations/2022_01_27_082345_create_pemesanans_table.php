<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePemesanansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pemesanans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('kamar_id');
            $table->foreignId('admin_id')->nullable();
            $table->date('tanggal_checkin');
            $table->date('tanggal_checkout');
            $table->integer('jumlah_kamar_dipesan');
            $table->string('nama_pemesan');
            $table->string('email_pemesan');
            $table->string('no_hp');
            $table->string('nama_tamu');
            $table->string('kode_pemesanan');
            $table->enum('status_pemesanan', ['pesan', 'diterima', 'selesai', 'batal']);
            $table->dateTime('tanggal_pesan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pemesanans');
    }
}
