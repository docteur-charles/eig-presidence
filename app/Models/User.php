<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
//use Laravel\Fortify\TwoFactorAuthenticatable;
//use Laravel\Jetstream\HasProfilePhoto;
//use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
	use HasApiTokens;
	use HasFactory;
	//use HasProfilePhoto;  
	//use HasTeams;
	use Notifiable;
	//use TwoFactorAuthenticatable;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name', 'prenom', 'email', 'password', 'role_id'
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password',
		'remember_token',
		'two_factor_recovery_codes',
		'two_factor_secret',
	];


	public function role()
	{
		return $this->belongsTo('App\Models\Role');
	}


	public function hasPrivilege($privilege)
	{
		$privileges = explode('$', $this->role->privileges);
		// echo json_encode($privileges);
		return in_array($privilege, $privileges);
	}


	public function hasOneOf(array $privileges)
	{
		return array_reduce($privileges, function ($hasPrivilege, $privilege) {
			$privilegs = explode('$', $this->role->privileges);
			return $hasPrivilege || in_array($privilege, $privilegs);
		});
	}


	/**
	 * The attributes that should be cast to native types.
	 *
	 * @var array
	 */
	/* protected $casts = [
        'email_verified_at' => 'datetime',
    ];*/


	/**
	 * The accessors to append to the model's array form.
	 *
	 * @var array
	 */
	/*  
		protected $appends = [
			'profile_photo_url',
		];
	*/
}
