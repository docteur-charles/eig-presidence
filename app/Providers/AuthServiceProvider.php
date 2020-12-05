<?php

namespace App\Providers;

use App\Models\Team;
use App\Policies\TeamPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
	/**
	 * The policy mappings for the application.
	 *
	 * @var array
	 */
	protected $policies = [
		Team::class => TeamPolicy::class,
	];

	/**
	 * Register any authentication / authorization services.
	 *
	 * @return void
	 */
	public function boot()
	{

		$this->registerPolicies();

		// Droit sur la gestion des utilisateurs.
		Gate::define('canManageUsers', function ($user) {
			return $user->hasOneOf(['TOUT_ADMIN', 'TOUT_ROOT']);
		});


		// Enregistrement d'un courrier.
		Gate::define('canRegister', function ($user, $courrier) {
			if ($courrier->typeContenu === 'LETTRE_DU_PRESIDENT') {
				return $user->hasPrivilege('ENREGIST_LETTRE_PRESIDENT');
			} else if (in_array($courrier->typeContenu, ['LETTRE_ORDINAIRE', 'ARRETE', 'BORDEREAU_DENVOI', 'DECISION'])) {
				if ($courrier->mention === 'CONFIDENTIEL') {
					return $user->hasPrivilege('ENREGIST_COURRIER_CONFIDENT');
				}
				return $user->hasPrivilege('ENREGIST_COURRIER_ORDINAIRE');
			}
			return false;
		});


		// Envoyer un courrier au Bureau d'Ordre ou à la Directrice des Courriers.
		Gate::define('canSendOnCircuit', function ($user, $courrier) {
			return ($courrier->typeCourrier === 'INTERNE') && $user->hasPrivilege('ENVOI_COURRIER');
		});


		// Envoyer un courrier à un directeur.
		Gate::define('canSendToOthers', function ($user, $courrier) {
			return ($courrier->typeCourrier === 'INTERNE') && $user->hasPrivilege('ENVOI_COURRIER_A_UN_DIRECTEUR');
		});


		// Valider ou rejeter un courrier.
		Gate::define('canValidateOrReject', function ($user) {
			return $user->hasPrivilege('VALIDAT_REJET_COURRIER');
		});


		// Retourner un courrier à l'enregistreur.
		Gate::define('canReturnTo', function ($user) {
			return $user->hasPrivilege('RENVOI_COURRIER');
		});


		// Valider au niveau supérieur.
		Gate::define('canForwardTo', function ($user) {
			return $user->hasPrivilege('VALIDAT_NIVEAU_SUP');
		});


		// Imputation d'un courrier.
		Gate::define('canImputeTo', function ($user) {
			return $user->hasPrivilege('IMPUTAT_COURRIER');
		});


		// Annotation d'un courrier.
		Gate::define('canAnnotate', function ($user) {
			return $user->hasPrivilege('ANNOT_COURRIER');
		});


		// Arreter le traitement d'un courrier.
		Gate::define('canTerminate', function ($user) {
			return $user->hasPrivilege('ARRET_TRAIT_COURRIER');
		});


		// Suivre l'état de traitement d'un courrier.
		Gate::define('canTrack', function ($user, $courrier) {

			// Si confidentiel ou lettre du président.
			if (($courrier->mention === 'CONFIDENTIEL') || ($courrier->typeContenu === 'LETTRE_DU_PRESIDENT')) {
				return $user->hasPrivilege('SUIVRE_COURRIER_CONFIDENT');
			} else {
				return $user->hasPrivilege('SUIVRE_COURRIER_ORDINAIRE');
			}
		});


		//  Consulter des statistiques liées à un courrier.
		Gate::define('canConsultStat', function ($user, $courrier) {

			// Si le courrier est interne et on en est propriétaire.
			if (($courrier->typeCourrier === 'INTERNE') && (($courrier->destinateur_id == $user->id) || ($courrier->destinataire_id == $user->id))) {
				return $user->hasPrivilege('CONSULT_STAT_PERSO');
			}

			// Si confidentiel ou lettre du président (directrice des courriers).
			if (($courrier->mention === 'CONFIDENTIEL') || ($courrier->typeContenu === 'LETTRE_DU_PRESIDENT')) {
				return $user->hasPrivilege('CONSUTL_STAT_CONFIDENT');
			} else { // Si c'est le bureau d'autre.
				return $user->hasPrivilege('CONSUTL_STAT_ORDINAIRE');
			}
		});


		//  Consulter les archives personnelles (directeur).
		Gate::define('canConsultPersonalArchiv', function ($user) {
			return $user->hasPrivilege('CONSULT_ARCHIVE_PERSO');
		});


		//  Consulter les archives confidentielles (responsables et directrice des courriers).
		Gate::define('canConsultConfidentialArchiv', function ($user) {
			return $user->hasPrivilege('CONSULT_ARCH_CONFIDENT');
		});


		//  Consulter les archives ordinaires (responsables et directrice des courriers).
		Gate::define('canConsultArchiv', function ($user) {
			return $user->hasPrivilege('CONSULT_ARCH_ORDINAIRE');
		});


		// Consulter les fichiers reçus des autres directeurs.
		Gate::define('canConsultReceived', function ($user) {
			return $user->hasPrivilege('CONSULT_COURRIER_RECU');
		});


		// Consulter les fichiers imputés à sa direction.
		Gate::define('canConsultImputed', function ($user) {
			return $user->hasPrivilege('CONSULT_COURRIER_DIRECTION');
		});
	}
}
