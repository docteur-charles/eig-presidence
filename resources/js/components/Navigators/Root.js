import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import LeftSidebar from '../Components/LeftSidebar'
import RightSidebar from '../Components/RightSidebar'
import FullRoute from './FullRoute'
import Loader from '../Components/Loader'
import Statistiques from '../Pages/Statistiques'

export default function Root() {


  let Dashboard = React.lazy(() => import('../Pages/Dashboard'));
  let Archive = React.lazy(() => import('../Pages/Archive'));
  let Enregistrement = React.lazy(() => import('../Pages/Enregistrement'));
  let Utilisateurs = React.lazy(() => import('../Pages/Utilisateurs'));
  let Courriers = React.lazy(() => import('../Pages/Courriers'));
  let CourrierDetail = React.lazy(() => import('../Pages/CourrierDetail'));
  

  let [sidebar, setSidebar] = useState(true);
  let [expand, setExpand] = useState(false);


  function showSidebar() {
    setExpand(false);
    setTimeout(() => {
      setSidebar(true);
    }, 200);
  }

  function hideSidebar() {
    setSidebar(false);
    setExpand(true);
  }

  function toggleSidebar(value) {
    if (value) {
      showSidebar();
    } else {
      hideSidebar();
    }
  }

  // useEffect(() => {
  //   let $ = window.$;
  //   $('body .layout-wrapper').niceScroll();
  // }, [])

  return (
    <>
      <div className="layout-wrapper" style={{ overflow: 'hidden', outline: 'none' }}>

        <Header full={expand} />

        <div className="content-wrapper">

          <LeftSidebar />

          <div className="content-body">

            <div className="content" style={expand ? ({ paddingRight: 0, position: 'relative' }) : ({ position: 'relative' })}>
              <React.Suspense fallback={<Loader />}>
                <Switch>
                  <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
                  <Route path='/dashboard' component={Dashboard} />
                  <Route exact path='/courriers' component={Courriers} />
                  <FullRoute path='/courriers/:courrier' component={CourrierDetail} showSidebar={toggleSidebar} />
                  <FullRoute path='/archives' component={Archive} showSidebar={toggleSidebar} />
                  <Route path='/statistiques' component={Statistiques} />
                  <FullRoute path='/enregistrements' component={Enregistrement} showSidebar={toggleSidebar} />
                  <FullRoute path='/utilisateurs' component={Utilisateurs} showSidebar={toggleSidebar} />
                </Switch>
              </React.Suspense>
            </div>

            <Footer />

          </div>

          {sidebar && (
            <RightSidebar />
          )}

        </div>

      </div>
    </>
  );

}