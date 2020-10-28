import React, { useEffect } from 'react';

export default function () {


  useEffect(() => {
    window.$('.select2').select2({
      placeholder: 'Sélectionnez un rôle'
    });
  })
  
  
  return (
    <div className="row mb-1 mr-2 animated fadeInRight">
      <div className="col-md-3 card">
        <div className="card-header text-center">
          Nouvel utilisateur
        </div>
        <div className="card-body bg-white">
          <form className="mb-2">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Nom & prénoms" required autofocus />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Adresse e-mail" required />
            </div>
            <div className="form-group">
              <select required className="select2">
                <option value="ADMIN">Administrateur</option>
                <option value="DIR">Directeur</option>
                <option value="BUR_ORDRE">Bureau d'ordre</option>
                <option value="DIR_COURRIER">Directrice des Courriers</option>
              </select>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Nouveau mot de passe" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Confirmation du mot de passe" required />
            </div>
            <button className="btn btn-primary btn-block">Enregister</button>
          </form>
        </div>
      </div>
      {/* form */}
      <div className="col">
        <div className="box box-block bg-white">
          <table className="table table-striped table-bordered dataTable" id="registerTable" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Noms</th>
                <th>E-mail</th>
                <th>Fonction</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );

}