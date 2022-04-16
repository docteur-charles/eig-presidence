import React from 'react';

export default function Demo() {

	let $ = window.$;

	function faireLeTour(e) {
		e.preventDefault();
		var enjoyhint_instance = new window.EnjoyHint({});

		let initOptions = [], options = {
			nextButton: { text: "Suivant" },
			skipButton: { text: "Ignorer" }
		};

		let data = [{
			s: 'next .header',
			d: 'La barre des tâches.'
		}, {
			s: 'next .navigation',
			d: 'Le menu de navigation vous permet de déclancher les opérations principales. Vous \'y trouverez que les opérations que vous êtes autorisés à effectuer !'
		}, {
			s: 'next .gec-dashboard',
			d: 'Votre tableau de bord. Vous y retrouverez un resumé de l\'ensemble de courriers que vous avez traités et ceux qui vous sont destinés mais que vous n\'avez pas traités pour chaque mois l\'année en cours.',

		}, {
			s: 'next .gec-enreg-courriers',
			d: "Enregistrement de nouveaux courriers par le bureau d'ordre ou la directrice.",

		}, {
			s: 'next .gec-courriers',
			d: "Liste de courriers qui vous sont destinés et que vous n'avez pas encore traités.",

		}, {
			s: 'next .gec-statistiques',
			d: 'Vos statistiques d\'utilisation.',

		}, {
			s: 'next .gec-utilisateurs',
			d: "Ici, vous gérerez l'ensemble des utilisateurs, leurs rôles, leurs grades et leurs privilèges.",

		}, {
			s: 'next .gec-archives',
			d: 'Liste des archives. Vous ne verrez que les courriers que vous êtes autorisés à voir.',

		}, {
			s: 'next .gec-params',
			d: 'Paramétrez ici votre compte. Vous pouvez changer entre autre votre mot de passe, votre photo de profil etc.',

		}, {
			s: 'next .gec-disconnect',
			d: 'Un clic ici fermera votre session et vous déconnectera.',

		}, {
			s: 'next .sidebar-content',
			d: 'Ici vous avez un aperçu de vos courriers en attente de traitement.',

		}, {
			s: 'next .sidebar-footer',
			d: 'Téléversez et envoyez de nouveaux courriers. Avec ce button, on ne peut envoyer que des PDF ou des Images.',

		}];

		for (const opt of data) {
			if ($(opt.s.substr(5)).length > 0) {
				initOptions.push({
					[opt.s]: opt.d,
					...options
				});
			}
		}

		// initOptions[initOptions.length-1].nextButton.text = 'Terminer';
		// initOptions[initOptions.length - 1].skipButton = false;

		enjoyhint_instance.set(initOptions);
		enjoyhint_instance.run();

		return false;
	}

	return (
		<div className="card bg-primary-bright border-0">
			<div className="card-body">
				<div className="row">
					<div className="col-xl-2 col-md-3">
						<figure>
							<img className="img-fluid" src="/assets/media/svg/upgrade.svg" alt="Faire un tour" />
						</figure>
					</div>
					<div className="col-xl-10 col-md-9">
						<div className="d-md-flex align-items-center justify-content-between text-center text-md-left p-4 p-md-0">
							<div className="mr-3">
								<h4 className="mb-3">Faites un tour !</h4>
								<p className="text-muted">Nous avons préparé pour vous un outil pour une prise en main rapide de l'interface utilisateur.</p>
								<a href="" className="small">Fermer</a>
							</div>
							<div className="flex-shrink-0 ml-3">
								<button className="btn btn-outline-primary btn-lg2" onClick={faireLeTour}>Démarrer maintenant</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}