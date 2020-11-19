import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Resultat from '../Components/Resultat';
import SearchInput from '../Components/SearchInput';

export default function Archive() {


  let [showResult, setResult] = useState(false);
  let [isLoading, setLoading] = useState(false);

  function showResults(e) {

    e.preventDefault();
    setResult(true);
    
    // Rechercher dans la base de données.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }

  function inputChange(e) {
    if (!e.target.value) {
      setResult(false);
    }
  }

  return (
    <div className="container-fluid mb-4">
      <div className="row">
        <div className="text-center col-12 d-flex flex-column align-items-center ">
          <img src="/assets/images/logo_transparent.png" width="200px" alt="logo" />
          <form className="col-lg-8 col-md-10 col-xl-8" onSubmit={showResults}>
            <SearchInput onChange={inputChange} />
            <button type="button" className="btn m-t-20 w-50 btn-warning btn-uppercase p-3 justify-content-center btn-rounded">
              <i className="ti-search mr-2"></i>RECHERCHER
        </button>
          </form>
        </div>
      </div>

      {showResult && (
        <Resultat isLoading={isLoading} />
      )}

    </div>
  );

}