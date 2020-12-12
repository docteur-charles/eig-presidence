<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Operation extends Model
{
	use HasFactory;

	protected $fillable = [
		'type',
		'donnees',
		'description',
		'user_id',
		'courrier_id'
	];

	public function courrier()
	{
		return $this->belongsTo('App\Models\Courrier');
	}

	public function user()
	{
		return $this->belongsTo('App\Models\User');
	}
}
