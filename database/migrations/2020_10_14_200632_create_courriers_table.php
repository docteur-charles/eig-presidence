<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourriersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courriers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('objet');
            $table->string('origine');
            $table->string('type_contenu');
            $table->string('type_courrier');
            $table->integer('reference');
            $table->string('mention');
            $table->dateTimeTz('date_retour')->nullable();
            $table->string('etat')->default('ATTENTE');
            $table->string('statut')->default('OUVERT');
            $table->text('observation')->nullable();
            $table->string('url_fichier');
            $table->integer('destinataire')->nullable();
            $table->integer('destinateur')->nullable();
            $table->integer('etape_actuelle');
            $table->timestamps();
		});
		
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courriers');
    }
}
