import React, { useEffect, useState } from 'react';
import PDF from '../Components/PDF';

export default function Enregistrement() {

  let [file, setFile] = useState(null);
  let [preview, setPreview] = useState(false);
  let [dataURL, setDataURL] = useState(null);

  function onFileChange(e) {
    let [f] = e.target.files;
    if (['application/pdf', 'image/jpg', 'image/bitmap', 'image/jpeg', 'image/png'].includes(f.type)) {
      if (f) setFile(f);
      let reader = new FileReader();
      reader.onload = function () {
        setDataURL(this.result);
      }
      reader.readAsDataURL(f);
    }
  }

  function showPreview() {
    if (file) setPreview(true);
  }

  useEffect(() => {
    window.$('.select2-example').select2({
      placeholder: 'Sélectionnez une mention'
    });
  })

  return !preview ? (
    <div className="mt-5 col-6 offset-3">
      <h4 className="text-center text-uppercase mb-3">Chargez le fichier à enregistrer</h4>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFile" onChange={onFileChange} />
        <label className="custom-file-label" htmlFor="customFile">{file ? (
          <>
            <b>Courrier chargé: </b>
            {file.name}
          </>
        ) : (
            <span>Chargez un courrier !</span>
          )}
        </label>
      </div>
      <div className="row mt-5 justify-content-end">
        <button className="btn btn-primary" onClick={showPreview}>Continuer</button>
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
                <select required defaultValue="" className="custom-select">
                  <option disabled>Sélectionnez un type</option>
                  <option value="ENTRANT">Entrant</option>
                  <option value="SORTANT">Sortant</option>
                  <option value="INTERNE">Interne</option>
                </select>
              </div>
              <div className="form-group">
                <label>Type de contenu</label>
                <select required defaultValue="" className="custom-select">
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
                <select required className="select2-example" multiple>
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