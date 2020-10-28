import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';


export default function FullRoute({ path, component, showSidebar }) {

  useEffect(() => {
    // side effects
    showSidebar(false);

    // cleanup
    return () => {
      showSidebar(true);
    }
  }, [])
  
  return (
    <Route path={path} component={component} />
  );
  
}