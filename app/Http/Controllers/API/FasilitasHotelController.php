<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;

use App\Models\Fasilitas_hotel;

class FasilitasHotelController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Fasilitas_hotel::all();
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
        $hasOnly = $request->has(['nama_fasilitas_hotel', 'deskripsi_fasilitas_hotel', 'foto_fasilitas_hotel']);

        if ($request->foto_fasilitas_hotel){
            $name = $request->foto_fasilitas_hotel;
            $name_image = time().rand(100, 999). '.'. $name->getClientOriginalExtension();
            $name->move(public_path('img/fasilitas'), $name_image);
        }

        if ($hasOnly) {
            $data = [
                'nama_fasilitas_hotel' => $request->nama_fasilitas_hotel,
                'foto_fasilitas_hotel' => '/img/fasilitas/'. $name_image,
                'deskripsi_fasilitas_hotel' => $request->deskripsi_fasilitas_hotel
            ];

            Fasilitas_hotel::create($data);

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
        $data = Fasilitas_hotel::where('id', $id)->first();
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
        $check = Fasilitas_hotel::where('id', $id)->first();

        $hasAny = $request->hasAny(['nama_fasilitas_hotel', 'foto_fasilitas_hotel', 'deskripsi_fasilitas_hotel']);

        if (!empty($check) || $hasAny) {
            if ($request->foto_fasilitas_hotel) {
                if ($request->hasFile('foto_fasilitas_hotel')) {
                    $name = $request->foto_fasilitas_hotel;
                    $name_image = time().rand(100, 999). '.'. $name->getClientOriginalExtension();
                    $name->move(public_path('img/fasilitas'), $name_image);
                    $name_image = '/img/fasilitas/'. $name_image;
                } else {
                    $name_image = $check->foto_fasilitas_hotel;
                }
            }

            $data = [
                'nama_fasilitas_hotel' => $request->nama_fasilitas_hotel ?: $check->nama_fasilitas_hotel,
                'foto_fasilitas_hotel' => $name_image,
                'deskripsi_fasilitas_hotel' => $request->deskripsi_fasilitas_hotel ?: $check->deskripsi_fasilitas_hotel
            ];

            Fasilitas_hotel::where('id', $id)->update($data);

            return $this->sendResponse(true, $data);
        } else {
            return $this->sendResponse(true, (!empty($check) || $hasAny), $check);
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
        Fasilitas_hotel::where('id', $id)->delete();
        return response()->json(['message' => 'data has been deleted.']);
    }
}
