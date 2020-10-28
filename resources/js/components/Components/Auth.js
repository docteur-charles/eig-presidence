import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useIterable } from '../Helpers/Hooks';
import { SET_AUTH } from '../Store/Actions';

export default function () {

  let dispatch = useDispatch();

  useEffect(() => {


    document.body.classList.add('form-membership');
    document.body.style.background = 'url(/assets/images/palais.jpg) no-repeat center center';
    document.body.style.backgroundSize = 'cover';
    
    
    return () => {
      document.body.classList.remove('form-membership');
      document.body.style.background = ''
      document.body.style.backgroundSize = ''
    };
    
    
  }, []);


  function handleSubmit(e) {
    e.preventDefault();

    let data = useIterable(new FormData(e.target));
    
    let meta = document.head.querySelector('[name="csrf-token"]');
    // fetch('/login', {
    //   method: 'POST',
    //   headers: {
    //     'X-CSRF-TOKEN': meta.getAttribute('content'),
    //     'Content-Type': 'Application/json',
    //     'Accept': 'Application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then((response) => {
    //     console.log(response)
    // })

    dispatch({
      type: SET_AUTH,
      data: {}
    });
  }
  
  
  return (

    <div className="form-wrapper">

      <div id="logo">
        <img width="150px" src="/assets/images/logo_transparent.png" alt="image" />
      </div>

      {/* ./ logo */}
      <h4>Authentification</h4>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <input type="text" className="form-control" name="email" placeholder="Utilisateur" required autoFocus />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Mot de passe" required />
        </div>
        {/* <div className="form-group d-flex justify-content-between">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" defaultChecked id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Rester connecté</label>
          </div>
        </div> */}
        <button className="btn btn-primary btn-block" type="submit">Se connecter</button>
      </form>
      {/* ./ form */}
    </div>
  );
}