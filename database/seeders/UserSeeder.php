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
        User::truncate();
        DB::table('role_user')->truncate();

        $directeur = User::create([
            'name' => 'DIR',
            'email' => 'dir@presidence.ne',
            'password' => Hash::make('Dir123'),
        ]);
        $Bur_ordre = User::create([
            'name' => 'BUR_ORDRE',
            'email' => 'Bur_ordre@presidence.ne',
            'password' => Hash::make('BurOrdre123'),
        ]);
        $Dir_courrier = User::create([
            'name' => 'DIR_COURRIER',
            'email' => 'Dir_Courrier@presidence.ne',
            'password' => Hash::make('DirCourrier123'),
        ]);
        $Sgpa = User::create([
            'name' => 'SGPA',
            'email' => 'sgpa@presidence.ne',
            'password' => Hash::make('Sgpa123'),
        ]);
        $Sgp = User::create([
            'name' => 'SGP',
            'email' => 'sgp@presidence.ne',
            'password' => Hash::make('Sgp123'),
        ]);
        $Dircaba2 = User::create([
            'name' => 'DIRCABA2',
            'email' => 'dircaba2@presidence.ne',
            'password' => Hash::make('Dircaba2123'),
        ]);
        $Dircaba1 = User::create([
            'name' => 'DIRCABA1',
            'email' => 'dircaba1@presidence.ne',
            'password' => Hash::make('Dircaba1123'),
        ]);
        $Dircab = User::create([
            'name' => 'DIRCAB',
            'email' => 'dircab@presidence.ne',
            'password' => Hash::make('Dircab123'),
        ]);
        $Prn = User::create([
            'name' => 'PRN',
            'email' => 'prn@presidence.ne',
            'password' => Hash::make('Prn123'),
        ]);
        $Admin = User::create([
            'name' => 'ADMIN',
            'email' => 'admin@presidence.ne',
            'password' => Hash::make('Admin123'),
        ]);
        $Root = User::create([
            'name' => 'ROOT',
            'email' => 'root@presidence.ne',
            'password' => Hash::make('Root123'),
        ]);
        $directeurRole = Role::where('nom','DIR')->first();
        $Bur_ordreRole = Role::where('nom','BUR_ORDRE')->first();
        $Dir_courrierRole = Role::where('nom','DIR_COURRIER')->first();
        $SgpaRole = Role::where('nom','SGPA')->first();
        $SgpRole = Role::where('nom','SGP')->first();
        $Dircaba1Role = Role::where('nom','DIRCABA1')->first();
        $Dircaba2Role = Role::where('nom','DIRCABA2')->first();
        $DircabRole = Role::where('nom','DIRCAB')->first();
        $PrnRole = Role::where('nom','PRN')->first();
        $AdminRole = Role::where('nom','ADMIN')->first();
        $RootRole = Role::where('nom','ROOT')->first();


        //attacher les roles au differents utilisateurs 
        $directeur->roles()->attach($directeurRole);
        $Bur_ordre->roles()->attach($Bur_ordreRole);
        $Dir_courrier->roles()->attach($Dir_courrierRole);
        $Sgpa->roles()->attach($SgpaRole);
        $Sgp->roles()->attach($SgpRole);
        $Dircaba2->roles()->attach($Dircaba2Role);
        $Dircaba1->roles()->attach($Dircaba1Role);
        $Dircab->roles()->attach($DircabRole);
        $Prn->roles()->attach($PrnRole);
        $Admin->roles()->attach($AdminRole);
        $Root->roles()->attach($RootRole);
    }
}
