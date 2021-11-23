import React from 'react';
import { Route } from "react-router-dom";

function FullLayout(props:any) {
  const { exact, path, component: Component } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps:any) => {
        return <Component {...routeProps} />;
      }}  
    />
  );
}

export default FullLayout;
