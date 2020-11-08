import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import { SET_AUTH } from './Store/Actions';
import Store from './Store/Store';


import PreLoader from './Components/PreLoader';
import FileInput from './Components/FileInput';
import Auth from './Components/Auth';
import Root from './Navigators/Root';


function App() {

  let [isLoading, setLoading] = useState(true);
  let [isFetching, setFetching] = useState(true);

  let auth = useSelector(state => state.auth);

  function checkSession(token) {
    return Promise.resolve({ isValid: true });
  }

  useEffect(() => {
    setLoading(false);
  }, [auth]);

  useEffect(() => {

    if (!isLoading) {
      if (auth) {
        console.log('Session initiale:', auth);
        checkSession(auth.token).then(({ isValid }) => {
          console.log(isValid)
          if (isValid) {
            console.log('La session est valide !');
          } else {
            localStorage.removeItem('auth');
            dispatch({
              type: SET_AUTH,
              data: null
            });
            console.log("Session invalide !");
          }
          setFetching(false);
        });
        setLoading(false);
        setFetching(false);
      } else {
        console.log('Pas de session initiale !', auth);
        setFetching(false);
      }
    }

  }, [isLoading]);


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
