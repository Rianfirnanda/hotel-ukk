<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Kamar;

class KamarController extends BaseController
{
    /**
     * Handling role level user
     *
     * @return \Illuminate\Http\Response
     */
    /*public function __construct()
    {
        $this->middleware(function($request, $next) {
            if (Auth::user()->level == 'administrator') {
                return response()->json(['message' => 'access denied.']);
            }
            return $next($request);
        });
        $this->middleware('guest')->except(['index', 'show']);
    }*/

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest')->except(['index', 'show']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Kamar::all();
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
        $hasOnly = $request->has(['nama_kamar', 'foto_kamar', 'jumlah_kamar', 'harga_kamar', 'deskripsi_kamar']);

        if ($request->foto_kamar){
            $name = $request->foto_kamar;
            $name_image = time().rand(100, 999). '.'. $name->getClientOriginalExtension();
            $name->move(public_path('img'), $name_image);
        }

        if ($hasOnly) {
            $data = [
                'nama_kamar' => $request->nama_kamar,
                'foto_kamar' => '/img/'. $name_image,
                'jumlah_kamar' => $request->jumlah_kamar,
                'harga_kamar' => $request->harga_kamar,
                'deskripsi_kamar' => $request->deskripsi_kamar
            ];

            Kamar::create($data);

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
        $data = Kamar::where('id', $id)->first();
        if (empty($data)) return $this->isEmpty();
        return $data;
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
        $check = Kamar::where('id', $id)->first();

        $hasAny = $request->hasAny(['nama_kamar', 'foto_kamar', 'jumlah_kamar', 'harga_kamar', 'deskripsi_kamar']);

        if (!empty($check) || $hasAny) {
            if ($request->foto_kamar) {
                if ($request->hasFile('foto_kamar')) {
                    $name = $request->foto_kamar;
                    $name_image = time().rand(100, 999). '.'. $name->getClientOriginalExtension();
                    $name->move(public_path('img'), $name_image);
                    $name_image = '/img/'. $name_image;
                } else {
                    $name_image = $check->foto_kamar;
                }
            }

            $data = [
                'nama_kamar' => $request->nama_kamar ?: $check->nama_kamar,
                'foto_kamar' => $name_image,
                'jumlah_kamar' => $request->jumlah_kamar ?: $check->jumlah_kamar,
                'harga_kamar' => $request->harga_kamar ?: $check->harga_kamar,
                'deskripsi_kamar' => $request->deskripsi_kamar ?: $check->deskripsi_kamar
            ];

            Kamar::where('id', $id)->update($data);

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
        Kamar::where('id', $id)->delete();
        return response()->json(['message' => 'data has been deleted.']);
    }

    public function fasilitas($id)
    {
        $data = Kamar::where('id', $id)->first()->fasilitas_kamar;

        if (empty($data)) return $this->isEmpty();
        return $this->sendResponse(true, $data);
    }
}
