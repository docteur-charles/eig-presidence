<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courrier extends Model
{
    use HasFactory;

    protected $fillable = [
        'objet',
        'origine',
        'type_contenu',
        'type_courrier',
        'reference',
        'mention',
        'date_retour',
        'etat',
        'observation',
        'url_fichier',
        'destinataire_id',
        'destinateur_id',
        'etape_actuelle'
    ];
}
