import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileInput from '../Components/FileInput';
import PDF from '../Components/PDF';

export default function Enregistrement() {

  let [preview, setPreview] = useState(false);
  let [file, setFile] = useState(null);
  let [dataURL, setDataURL] = useState(null);

  function onFileLoaded(f, data) {
    setFile(f);
    setDataURL(data)
  }

  function showPreview() {
    if (file) setPreview(true);
  }

  useEffect(() => {
    if (preview) {
      window.$('.select2-courrier').select2({
        placeholder: 'Sélectionnez un type de courrier'
      });
      window.$('.select2-contenu').select2({
        placeholder: 'Sélectionnez un type de contenu'
      });
      window.$('.select2-mention').select2({
        placeholder: 'Sélectionnez une mention'
      });
    }
  }, [preview])

  return !preview ? (

    <div className="mt-3 mt-lg-4 mt-xl-5 col-8 offset-2">
      <h4 className="text-center text-warning text-uppercase mb-3">
        <Link>
          <img src="/assets/images/logo_transparent.png" width="200px" alt="logo" />
        </Link>
      </h4>
      <FileInput onLoaded={onFileLoaded} />
      <div className="row m-t-25 m-b-25 justify-content-center">
        <button type="button" onClick={showPreview} class="btn col-4 btn-warning btn-uppercase p-3 justify-content-center btn-rounded">
          <i class="ti-plus mr-2"></i>Enregistrer le courrier
        </button>
      </div>
    </div>

  ) : (
      
      <div className="container-fluid row" >
        <div className="col-md-4 mb-1 card">
          <div className="card-header text-center text-uppercase">
            Enregistrement du courrier
        </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Origine</label>
                <input type="text" required className="form-control" placeholder="Provénance du courrier" />
              </div>
              <div className="form-group">
                <label>Objet</label>
                <input type="text" required className="form-control" placeholder="Objet du courrier" />
              </div>
              <div className="form-group">
                <label>Type de courrier</label>
                <select required defaultValue="" className="select2-courrier">
                  <option value="" disabled>Sélectionnez un type</option>
                  <option value="ENTRANT">Entrant</option>
                  <option value="SORTANT">Sortant</option>
                  <option value="INTERNE">Interne</option>
                </select>
              </div>
              <div className="form-group">
                <label>Type de contenu</label>
                <select required defaultValue="" className="select2-contenu">
                  <option value="" disabled>Sélectionnez un type</option>
                  <option value="LETTRE_ORDINAIRE">Lettre ordinaire</option>
                  <option value="LETTRE_DU_PRESIDENT">Lettre du Président</option>
                  <option value="ARRETE">Arrêté</option>
                  <option value="BORDEREAU_DENVOI">Bordéreau d'envoi</option>
                  <option value="DECISION">Décision</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mention du courrier</label>
                <select required className="select2-mention" multiple>
                  <option value="ORDINAIRE">Ordinaire</option>
                  <option value="CONFIDENTIEL">Confidentiel</option>
                  <option value="URGENT">Urgent</option>
                  <option value="TRES_URGENT">Très urgent</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Enregistrer</button>
            </form>
          </div>
        </div>
        <div className="col-md-8 pl-2">
          {file.type !== 'application/pdf' ? (
            <img src={dataURL} width="100%" height='auto' />
          ) : (
              <PDF url={dataURL} pagination={true} />
            )}
        </div>
      </div>
    
    );

}