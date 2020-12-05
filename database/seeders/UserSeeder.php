<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		DB::statement('SET FOREIGN_KEY_CHECKS=0;');
		User::truncate();
		DB::table('role_user')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS=1;');



		if ($dirRole = Role::where('nom', 'DIR')->first())
			User::create([
				'nom' => 'DIRECTEUR',
				'prenom' => 'INFORMATIQUE',
				'role_id' => $dirRole->id,
				'email' => 'dir@presidence.ne',
				'password' => Hash::make('Dir123'),
			]);


		if ($burOrdreRole = Role::where('nom', 'BUR_ORDRE')->first())
			User::create([
				'nom' => 'AGENT',
				'prenom' => 'DU BUREAU D\'ORDRE',
				'role_id' => $burOrdreRole->id,
				'email' => 'bur_ordre@presidence.ne',
				'password' => Hash::make('BurOrdre123'),
			]);


		if ($dirCourrierRole = Role::where('nom', 'DIR_COURRIER')->first())
			User::create([
				'nom' => 'DIRECTRICE',
				'prenom' => 'DES COURRIERS',
				'role_id' => $dirCourrierRole->id,
				'email' => 'dir_Courrier@presidence.ne',
				'password' => Hash::make('DirCourrier123'),
			]);


		if ($sgpaRole = Role::where('nom', 'SGPA')->first())
			User::create([
				'nom' => 'SGP',
				'prenom' => 'ADJOINT',
				'role_id' => $sgpaRole->id,
				'email' => 'sgpa@presidence.ne',
				'password' => Hash::make('Sgpa123'),
			]);


		if ($sgpRole = Role::where('nom', 'SGP')->first())
			User::create([
				'nom' => 'SECRETAIRE GENERAL',
				'prenom' => 'ADJOINT',
				'role_id' => $sgpRole->id,
				'email' => 'sgp@presidence.ne',
				'password' => Hash::make('Sgp123'),
			]);


		if ($dirCab2 = Role::where('nom', 'DIRCABA2')->first())
			User::create([
				'nom' => 'DIRECTEUR DE CABINET',
				'prenom' => 'AJOINT EN SECOND',
				'role_id' => $dirCab2->id,
				'email' => 'dircaba2@presidence.ne',
				'password' => Hash::make('Dircaba2123'),
			]);


		if ($dirCab1 = Role::where('nom', 'DIRCABA1')->first())
			User::create([
				'nom' => 'DIRECTEUR DE CABINET',
				'prenom' => 'ADJOINT',
				'role_id' => $dirCab1->id,
				'email' => 'dircaba1@presidence.ne',
				'password' => Hash::make('Dircaba1123'),
			]);


		if ($dirCab = Role::where('nom', 'DIRCAB')->first())
			User::create([
				'nom' => 'DIRECTEUR',
				'prenom' => 'DE CABINET',
				'role_id' => $dirCab->id,
				'email' => 'dircab@presidence.ne',
				'password' => Hash::make('Dircab123'),
			]);


		if ($prnRole = Role::where('nom', 'PRN')->first())
			User::create([
				'nom' => 'PRESIDENT',
				'prenom' => 'DE LA REPUBLIQUE',
				'role_id' => $prnRole->id,
				'email' => 'prn@presidence.ne',
				'password' => Hash::make('Prn123'),
			]);


		if ($adminRole = Role::where('nom', 'ADMIN')->first())
			echo 'ADMIN OK' && User::create([
				'nom' => 'AGENT',
				'prenom' => 'ADMINISTRATEUR',
				'role_id' => $adminRole->id,
				'email' => 'admin@presidence.ne',
				'password' => Hash::make('Admin123'),
			]);


		if ($rootRole = Role::where('nom', 'ROOT')->first())
			echo 'ROOT OK' && User::create([
				'nom' => 'ADMINISTRATEUR',
				'prenom' => 'DU SYSTEME',
				'role_id' => $rootRole->id,
				'email' => 'root@presidence.ne',
				'password' => Hash::make('Root123'),
			]);
	}
}
