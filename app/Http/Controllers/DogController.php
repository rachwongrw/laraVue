<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dog;
use App\Http\Resources\Dog as DogResource;
use App\Http\Resources\DogCollection;

class DogController extends Controller
{
    public function index()
    {
        return new DogCollection(Dog::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $dog = Dog::create($request->all());

        return (new DogResource($dog))
                -> response()
                ->setStatusCode(201);
    }

    public function delete($id)
    {
        $dog = Plater::findOrFail($id);
        $dog->delete();

        return response()->json(null, 204);
    }
}
