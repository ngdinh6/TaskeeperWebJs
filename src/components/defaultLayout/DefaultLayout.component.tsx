import Footer from "components/footer/Footer.component";
import Header from "components/header/Header.component";
import React, { Component } from "react";
import { Route } from "react-router-dom";

import * as Style from "components/defaultLayout/style";

const DefaultLayout = (props: any) => {
  const { exact, path, component: Component } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps: any) => {
        return (
          <div>
            <body>
              <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
              >
                <Header />
              </nav>
              <Component {...routeProps} />
              <footer className="ftco-footer ftco-bg-dark ftco-section">
                <Footer />
              </footer>
            </body>
          </div>
        );
      }}
    />
  );
};

export default DefaultLayout;
