<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;

use App\Models\Kamar;
use App\Models\Fasilitas_kamar;

class FasilitasKamarController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $hasOnly = $request->has(['kamar_id', 'nama_fasilitas_kamar']);

        if ($hasOnly) {
            $data = [
                'kamar_id' => $request->kamar_id,
                'nama_fasilitas_kamar' => $request->nama_fasilitas_kamar,
            ];

            Fasilitas_kamar::create($data);

            return $this->sendResponse(true, $data);
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
        $data = Fasilitas_kamar::where('id', $id)->first();

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
        $check = Fasilitas_kamar::where('id', $id)->first();
        $hasAny = $request->hasAny(['kamar_id', 'nama_fasilitas_kamar']);
        if (!empty($check) && $hasAny) {
            $data = [
                'kamar_id' => $check->kamar_id,
                'nama_fasilitas_kamar' => $request->nama_fasilitas_kamar ?: $check->nama_fasilitas_kmaar,
            ];

            Fasilitas_kamar::where('id', $id)->update($data);

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
        Fasilitas_kamar::where('id', $id)->delete();
        return response()->json(['message' => 'data has been deleted.']);
    }
}
