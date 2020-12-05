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
            $table->string('reference');
            $table->string('mention');
            $table->dateTimeTz('date_retour');
            $table->string('etat');
            $table->text('observation');
            $table->string('url_fichier');
            $table->integer('destinataire');
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
