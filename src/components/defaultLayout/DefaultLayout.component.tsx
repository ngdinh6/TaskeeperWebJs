import Footer from "components/footer/Footer.component";
import Header from "components/header/Header.component";
import React, {Component} from 'react';
import { Route } from "react-router-dom";

import * as Style from "components/defaultLayout/style";

const DefaultLayout = (props: any) => {
  const { exact, path, component: Component } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps:any) => {
        return (
          <>
            <Header />
            <Style.MainContainer>
              <Component {...routeProps} />
            </Style.MainContainer>
            <Footer />
          </>
        );
      }}
    />
  );
};

export default DefaultLayout;
