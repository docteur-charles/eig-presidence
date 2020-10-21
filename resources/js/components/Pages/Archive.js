import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Resultat from '../Components/Resultat';

export default function Archive() {


  let [showResult, setResult] = useState(false);

  function showResults(e) {
    e.preventDefault();
    setResult(true);
  }

  function inputChange(e) {
    if (!e.target.value) {
      setResult(false);
    }
  }
  
  return (
    <div className="container-fluid mb-4">
      <div className="row justify-content-center">
        <div className="text-center col-12">
          <Link to="/">
            <img src="/assets/images/logo_transparent.png" width="200px" alt="logo" />
          </Link>
          <form className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-xl-6 offset-xl-3" onSubmit={showResults}>
            <div className="form-group">
              <input required type="search" onChange={inputChange} style={{textAlign: 'center', borderRadius: 10, fontSize: 20, lineHeight: 20}} placeholder="Rechercher un courrier" className="input-lg form-control pd-md-3 pd-lg-4 pd-xl-5" aria-label="Text input with dropdown button" />
            </div>
            <button type="submit" class="btn btn-lg rounded-pill btn-primary w-50 justify-content-center">Rechercher</button>
          </form>
        </div>
      </div>

      {showResult && (
        <Resultat />
      )}

    </div>
  );

}