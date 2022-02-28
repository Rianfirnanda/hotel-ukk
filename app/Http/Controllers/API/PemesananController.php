<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;

use App\Models\Pemesanan;
use App\Models\Kamar;

class PemesananController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Pemesanan::all();
        foreach($data as $key => $v) {
            $kamar_id = $v->kamar_id;

            $data[$key]['nama_kamar'] = Kamar::where('id', $kamar_id)->first()['nama_kamar'];
        }
        return $this->sendResponse(true, $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $hasFilled = $request->has(['nama_pemesan', 'email_pemesan', 'nama_tamu', 'no_hp', 'tanggal_checkin', 'tanggal_checkout', 'jumlah_kamar_dipesan', 'admin_id', 'kamar_id']);

        if ($hasFilled) {
            $data = [
                'nama_pemesan' => $request->nama_pemesan,
                'email_pemesan' => $request->email_pemesan,
                'nama_tamu' => $request->nama_tamu,
                'no_hp' => $request->no_hp,
                'tanggal_checkin' => $request->tanggal_checkin,
                'tanggal_checkout' => $request->tanggal_checkout,
                'jumlah_kamar_dipesan' => $request->jumlah_kamar_dipesan,
                'admin_id' => $request->admin_id,
                'kamar_id' => $request->kamar_id,
                'kode_pemesanan' => '00'. count(Pemesanan::all()) + 1,
                'status_pemesanan' => 'pesan',
                'tanggal_pesan' => date('Y-m-d H:m:s'),
            ];

            Pemesanan::create($data);

            return $this->sendResponse(true, $data);
        } else {
            return $this->wasWrong();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Pemesanan::where('id', $id)->first();
        if (empty($data)) return $this->isEmpty();
        return $this->sendResponse(true, $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $check = Pemesanan::where('id', $id)->first();
        $hasAny = $request->hasAny([
            'status_pemesanan',
        ]);

        if (!empty($check) && $hasAny) {
            $data = [
                'status_pemesanan' => $request->status_pemesanan ?: $check->status_pemesanan,
            ];

            Pemesanan::where('id', $id)->update($data);

            return $this->sendResponse(true, $data);
        } else {
            return $this->wasWrong();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
