import React, { useEffect, useState } from 'react';
import PDF from '../Components/PDF';

export default function CourrierDetail() {

  let [file, setFile] = useState({});
  let $ = window.$;

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
  }, []);
  

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="col-md-10 pl-2 bg-gray position-relative">
        {file.type === 'application/pdf' ? (
          <img src={''} width="100%" height='auto' />
        ) : (
            <PDF url={'/documents/cahier_de_charges.pdf'} pagination={true} />
          )}
      </div>

      <div className="floating_action_buttons d-flex flex-column align-items-end" style={{position: 'fixed', zIndex: 999990, right: '20px', top: '40%'}}>


        <div className="button d-flex align-items-center mb-3">
          <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">ENVOYER AU SGPA</h5>
          <button type="button" className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating">
            <i className="ti-stats-up mr-2" />
          </button>
        </div>

        <div className="button d-flex align-items-center mb-3">
          <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">EMPUTER AUX CELLULES</h5>
          <button type="button" className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating">
            <i className="ti-share mr-2" />
          </button>
        </div>

        <div className="button d-flex align-items-center mb-3">
          <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">RENVOYER AU BUREAU D'ORDRE</h5>
          <button type="button" className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating">
            <i className="ti-back-left mr-2" />
          </button>
        </div>
        

        <div className="button d-flex align-items-center mb-3">
          <h5 className="shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white">REJETER LE COURRIER</h5>
          <button type="button" className="shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating">
            <i className="ti-trash mr-2" />
          </button>
        </div>
      </div>

    </div>
  )
}
