import React from 'react';

export default function Demo() {


  function faireLeTour(e) {
    e.preventDefault();
    var enjoyhint_instance = new window.EnjoyHint({});

    let options = {
      nextButton: { text: "Suivant" },
      skipButton: { text: "Ignorer" }
    };

    enjoyhint_instance.set([
      {
        'next .header': 'La barre des tâches.',
        ...options
      }, {
        'next .navigation': 'Le menu de navigation vous permet de déclancher les opérations principales. Vous \'y trouverez que les opérations que vous êtes autorisés à effectuer !',
        ...options
      }, {
        'next .gec-dashboard': 'Votre tableau de bord. Vous y retrouverez un resumé de l\'ensemble de courriers que vous avez traités et ceux qui vous sont destinés mais que vous n\'avez pas traités pour chaque mois l\'année en cours.',
        ...options
      }, {
        'next .gec-enreg-courriers': "Enregistrement de nouveaux courriers par le bureau d'ordre ou la directrice.",
        ...options
      }, {
        'next .gec-courriers': "Liste de courriers qui vous sont destinés et que vous n'avez pas encore traités.",
        ...options
      }, {
        'next .gec-statistiques': 'Vos statistiques d\'utilisation.',
        ...options
      }, {
        'next .gec-utilisateurs': "Ici, vous gérerez l'ensemble des utilisateurs, leurs rôles, leurs grades et leurs privilèges.",
        ...options
      }, {
        'next .gec-archives': 'Liste des archives. Vous ne verrez que les courriers que vous êtes autorisés à voir.',
        ...options
      }, {
        'next .sidebar-content': 'Ici vous avez un aperçu de vos courriers en attente de traitement.',
        ...options
      }, {
        'next .sidebar-footer': 'Téléversez et envoyez de nouveaux courriers. Avec ce button, on ne peut envoyer que des PDF ou des Images.',
        ...options
      }
    ]);
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