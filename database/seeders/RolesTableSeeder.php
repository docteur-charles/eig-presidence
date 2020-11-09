<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::truncate();
        Role::create([  
            'nom' => 'DIR',
            'grade'=> 0,
            'description' =>'DIRECTEURS DES DEPARTEMENTS',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'BUR_ORDRE',
            'grade'=> 1,
            'description' =>'BUREAU ORDRE',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'DIR_COURRIER',
            'grade'=> 2,
            'description' =>'RESPONSABLE SERVICE COURRIER',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'SGPA',
            'grade'=> 3,
            'description' =>'SECRETAIRE GENERAL ADJOINT PRESIDENCE',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'SGP',
            'grade'=> 4,
            'description' =>'SECRETAIRE GENERAL PRESIDENCE',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'DIRCABA2',
            'grade'=> 5,
            'description' =>'DIRECTEUR DE CABINET ADJOINT EN SECOND',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'DIRCABA1',
            'grade'=> 6,
            'description' =>'DIRECTEUR DE CABINET ADJOINT',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'DIRCAB',
            'grade'=> 7,
            'description' =>'DIRECTEUR DE CABINET',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'PRN',
            'grade'=> 8,
            'description' =>'PRESIDENT DE LA REPUBLIQUE',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'ADMIN',
            'grade'=> 254,
            'description' =>'ADMINISTRATEUR',
            'privileges' =>''
        ]);
        Role::create([  
            'nom' => 'ROOT',
            'grade'=> 255,
            'description' =>'ROOT',
            'privileges' =>''
        ]);
    }
}
