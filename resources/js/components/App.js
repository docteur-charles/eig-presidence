import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, useLocation } from 'react-router-dom';


import { SET_AUTH } from './Store/Actions';
import Store from './Store/Store';


import PreLoader from './Components/PreLoader';
import Auth from './Components/Auth';
import Root from './Navigators/Root';


function App() {

	let {pathname} = useLocation();

  let [isLoading, setLoading] = useState(true);
  let [isFetching, setFetching] = useState(true);

  let auth = useSelector(state => state.auth);

  function checkSession(token) {
    return Promise.resolve({ isValid: true });
  }

  useEffect(() => {
    window.toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        progressBar: true,
        showMethod: "slideDown",
        hideMethod: "slideUp",
        showDuration: 200,
        hideDuration: 200
    };
    setLoading(false);
  }, [auth]);

  useEffect(() => {

    if (!isLoading) {
      if (auth) {
        console.log('Session initiale:', auth);
        checkSession(auth.token).then(({ isValid }) => {
          setFetching(false);
          console.log(isValid)
          if (!isValid) {
            localStorage.removeItem('auth');
            dispatch({
              type: SET_AUTH,
              data: null
            });
            console.log("Session invalide !");
          }
        });
      } else {
        console.log('Pas de session initiale !', auth);
        setFetching(false);
      }
    }

  }, [isLoading]);

	useEffect(() => {
		window.$(window).scrollTop(0);
	}, [pathname]);


  return (isFetching || isLoading) ? (
    <PreLoader />
  ) : (
      <>
        {!auth ? (
          <Auth />
        ) : (
            <Root auth={auth} />
          )}
      </>
    );


}


export default App;

if (document.getElementById('app')) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={Store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('app'));
}
