import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Dashboard from '../Pages/Dashboard'
import Courrier from '../Components/Courrier'
import LeftSidebar from '../Components/LeftSidebar'
import RightSidebar from '../Components/RightSidebar'
import Archive from '../Pages/Archive'
import Enregistrement from '../Pages/Enregistrement'
import FullRoute from './FullRoute'
import Utilisateurs from '../Pages/Utilisateurs'

export default function Root() {

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
      <div className="layout-wrapper" style={{overflow: 'hidden', outline: 'none'}}>

        <Header full={expand} />

        <div className="content-wrapper">

          <LeftSidebar />
          
          <div className="content-body">

            <div className="content" style={expand ? ({paddingRight: 0,position: 'relative'}): ({position: 'relative'})}>
              <Switch>
                <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
                <Route path='/dashboard' component={Dashboard} />
                <FullRoute path='/archives' component={Archive} showSidebar={toggleSidebar} />
                <FullRoute path='/enregistrements' component={Enregistrement} showSidebar={toggleSidebar} />
                <FullRoute path='/utilisateurs' component={Utilisateurs} showSidebar={toggleSidebar} />
              </Switch>
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