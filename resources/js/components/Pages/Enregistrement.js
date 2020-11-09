import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileInput from '../Components/FileInput';
import PDF from '../Components/PDF';
import {fromDesktop, fromLarge} from '../Helpers/Layout';

export default function Enregistrement() {

  let [preview, setPreview] = useState(true);
  let [file, setFile] = useState({ type: 'application/pdf' });
  let [dataURL, setDataURL] = useState(null);

  function onFileLoaded(f, data) {
    setFile(f);
    setDataURL(data)
  }

  function showPreview() {
    if (file) setPreview(true);
  }

  useEffect(() => {

    let $ = window.$;
    
    if (preview) {
      $('.select2-courrier').select2({
        placeholder: 'Sélectionnez un type de courrier'
      });
      $('.select2-contenu').select2({
        placeholder: 'Sélectionnez un type de contenu'
      });
      $('.select2-mention').select2({
        placeholder: 'Sélectionnez une mention'
      });
      setTimeout(() => {
        $('.button-continue').css('top', '40px')
      }, 500);
    }

  }, [preview]);

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

      <div className="container-fluid row position-relative justify-content-center" style={{
        paddingTop: '70px',
        overflow: 'hidden'
      }} >
        <div className="button-continue shadow d-flex justify-content-end align-items-start" style={{
          padding: '20px',
          transition: '.5s',
          background: '#fff',
          border: '2px solid orange',
          zIndex: 1000,
          position: 'fixed',
          top: '-1090px',
          width: `calc(100% - ${fromLarge() ? 170 : 60}px)`,
        }}>
          <p className={`${fromDesktop() ? 'font-size-20':'font-size-18'}`}>Ceci est un apperçu de votre courrier. Vous pouvez naviguer avec les boutons situés en dessous du conteneur ou cliquer sur le bouton suivant pour continuer l'enregistrement.</p>
          <button type="submit" className="col-5 m-l-40 p-15 m-r-40 col-md-3 col-xl-2 btn btn-outline-primary btn-block">CONTINUER</button>
        </div>
        {/* <div className="col-md-4 mb-1 card">
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
        </div> */}
        <div className="col-md-10 pl-2">
          {file.type !== 'application/pdf' ? (
            <img src={dataURL} width="100%" height='auto' />
          ) : (
              <PDF url={dataURL || '/documents/cahier_de_charges.pdf'} pagination={true} />
            )}
        </div>
      </div>

    );

}