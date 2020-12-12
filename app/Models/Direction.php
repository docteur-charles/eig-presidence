<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direction extends Model
{
	use HasFactory;
	
	protected $fillable = [
		'nom',
		'directeur_id'
	];

	public function directeur() {
		return $this->belongsTo('App\Model\User');
	}
	
}
