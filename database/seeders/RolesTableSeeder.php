<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Role::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');


        Role::create([
            'nom' => 'DIR',
            'grade' => 0,
            'privileges' => 'ENVOI_COURRIER$ENVOI_COURRIER_A_UN_DIRECTEUR$CONSULT_COURRIER_DIRECTION$CONSULT_COURRIER_RECU$CONSULT_ARCHIVE_PERSO$CONSULT_STAT_PERSO',
            'description' => 'DIRECTEURS DES DEPARTEMENTS',
        ]);


        Role::create([
            'nom' => 'BUR_ORDRE',
            'grade' => 1,
            'privileges' => 'ENREGIST_COURRIER_ORDINAIRE$SUIVRE_COURRIER_ORDINAIRE$CONSUTL_STAT_ORDINAIRE$CONSULT_ARCH_ORDINAIRE',
            'description' => 'BUREAU D\'ORDRE',
        ]);


        Role::create([
            'nom' => 'DIR_COURRIER',
            'grade' => 2,
            'privileges' => 'SUIVRE_COURRIER_CONFIDENT$SUIVRE_COURRIER_ORDINAIRE$CONSUTL_STAT_CONFIDENT$ENREGIST_COURRIER_CONFIDENT$ENREGIST_LETTRE_PRESIDENT$VALIDAT_REJET_COURRIER$CONSULT_ARCH_CONFIDENT',
            'description' => 'RESPONSABLE DU SERVICE COURRIER',
        ]);


        Role::create([
            'nom' => 'SGPA',
            'grade' => 3,
            'privileges' => 'SUIVRE_COURRIER_CONFIDENT$SUIVRE_COURRIER_ORDINAIRE$CONSUTL_STAT_CONFIDENT$ANNOT_COURRIER$IMPUTAT_COURRIER$VALIDAT_NIVEAU_SUP$RENVOI_COURRIER$ARRET_TRAIT_COURRIER',
            'description' => 'SECRETAIRE GENERAL ADJOINT DE LA PRESIDENCE',
        ]);


        Role::create([
            'nom' => 'SGP',
            'grade' => 4,
            'privileges' => 'SUIVRE_COURRIER_CONFIDENT$SUIVRE_COURRIER_ORDINAIRE$CONSUTL_STAT_CONFIDENT$ANNOT_COURRIER$IMPUTAT_COURRIER$VALIDAT_NIVEAU_SUP$RENVOI_COURRIER$ARRET_TRAIT_COURRIER',
            'description' => 'SECRETAIRE GENERAL DE LA PRESIDENCE',
        ]);


        Role::create([
            'nom' => 'DIRCABA2',
            'grade' => 5,
            'privileges' => 'SUIVRE_COURRIER_CONFIDENT$SUIVRE_COURRIER_ORDINAIRE$CONSUTL_STAT_CONFIDENT$ANNOT_COURRIER$IMPUTAT_COURRIER$VALIDAT_NIVEAU_SUP$RENVOI_COURRIER$ARRET_TRAIT_COURRIER',
            'description' => 'DIRECTEUR DE CABINET ADJOINT EN SECOND',
        ]);


        Role::create([
            'nom' => 'DIRCABA1',
            'grade' => 6,
            'privileges' => 'SUIVRE_COURRIER_CONFIDENT$SUIVRE_COURRIER_ORDINAIRE$CONSUTL_STAT_CONFIDENT$ANNOT_COURRIER$IMPUTAT_COURRIER$VALIDAT_NIVEAU_SUP$RENVOI_COURRIER$ARRET_TRAIT_COURRIER',
            'description' => 'DIRECTEUR DE CABINET ADJOINT',
        ]);


        Role::create([
            'nom' => 'DIRCAB',
            'grade' => 7,
            'privileges' => 'SUIVRE_COURRIER_CONFIDENT$SUIVRE_COURRIER_ORDINAIRE$CONSUTL_STAT_CONFIDENT$ANNOT_COURRIER$IMPUTAT_COURRIER$VALIDAT_NIVEAU_SUP$RENVOI_COURRIER$ARRET_TRAIT_COURRIER',
            'description' => 'DIRECTEUR DE CABINET',
        ]);


        Role::create([
            'nom' => 'PRN',
            'grade' => 8,
            'privileges' => 'SUIVRE_COURRIER_CONFIDENT$SUIVRE_COURRIER_ORDINAIRE$CONSUTL_STAT_CONFIDENT$ANNOT_COURRIER$IMPUTAT_COURRIER$RENVOI_COURRIER$ARRET_TRAIT_COURRIER',
            'description' => 'PRESIDENT DE LA REPUBLIQUE',
        ]);


        Role::create([
            'nom' => 'ADMIN',
            'grade' => 254,
            'privileges' => 'TOUT_ADMIN',
            'description' => 'AGENT CHARGE D\'ADMINISTRER LE SYSTEME',
        ]);


        Role::create([
            'nom' => 'ROOT',
            'grade' => 255,
            'privileges' => 'TOUT_ROOT',
            'description' => 'ADMINISTRATEUR SYSTEME PRINCIPAL',
        ]);


    }
}
