<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Dog extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'name'              => $this->name,
            'breed'             => $this->breed,
            'age'               => (int) $this->age,
            'characteristics'   => $this->characteristics,
            'created_at'        => $this->created_at,
            'updated_at'        => $this->updated_at
        ];
        // return parent::toArray($request);
    }
}
