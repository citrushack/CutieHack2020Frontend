/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import ProtectedRoute from './containers/ProtectedRoute';
import UnprotectedOnlyRoute from './containers/UnprotectedOnlyRoute';
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthPage } from './containers/AuthPage';
import { RegisterForm } from './containers/RegisterForm';
import { SecurePage } from './containers/SecurePage';
import { Account } from './containers/Account';
import { LogOut } from './containers/LogOut';
import Base, { styles as stickyNavStyles } from './containers/StickyNav';
// import { css } from 'styled-components';
import styled from 'styled-components';
import getTheme from './theme';
import auth from 'utils/auth';

import './styles.css';

const StickyNav = styled(Base)`
  background: url(/images/asfalt-dark.png), #b0e7e8;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.4);
  border-radius: 49px;
  height: auto;
  padding: 0;
  margin: 2rem 2rem;
  margin-bottom: 3rem;
  position: -webkit-sticky;
  line-height: 24px;
  position: sticky;
  transition: all 125ms;
  top: 0;
`;
const Logo = styled.img`
  float: left;
  width: 4em;
  transform: translate(50%, 38%);
`;
const Nav = styled.nav`
  ${stickyNavStyles};
  overflow: auto;
  padding: 0;
  margin: 0;
  ul {
    float: right;
    transform: translate(-5%, -4%);
  }
  ul li {
    display: inline-block;
    margin-right: 0.1rem;
    padding: 10px;
  }
  ul li .navLink {
    font-size: 1em;
    background: url('/images/asfalt-dark-light.png'), #f5bb32;
    padding: 0.75rem;
    box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.3);
    border-radius: 22px;
    font-family: 'Fugaz One', cursive;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 2px 2px 0 #000;

    font-weight: 400;
    transition: background 0.5s;
    transition: color 0.3s;
    color: white;
  }
  ul li a {
    text-decoration: none;
  }
  ul li .navLink:hover {
    background: orange;
    color: white;
  }
`;
const theme = getTheme({
  paletteType: 'light',
});
function getNav(loggedIn, location) {
  if (location === '/logout') loggedIn = false;
  return (
    <ul>
      <li>
        <Link to="/">
          <div className="navLink">Home</div>
        </Link>
      </li>
      {!loggedIn && (
        <li>
          <Link to="/auth">
            <div className="navLink">Login</div>
          </Link>
        </li>
      )}
      {!loggedIn && (
        <li>
          <Link to="/apply">
            <div className="navLink">Apply</div>
          </Link>
        </li>
      )}
      {loggedIn && (
        <li>
          <Link to="/logout">
            <div className="navLink">Logout</div>
          </Link>
        </li>
      )}
      {loggedIn && (
        <li>
          <Link to="/account">
            <div className="navLink">My App</div>
          </Link>
        </li>
      )}
    </ul>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Route
          render={({ location }) => (
            <>
              <StickyNav>
                <Nav>
                  <Logo
                    alt="logo"
                    src="https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_960_720.png"
                  ></Logo>
                  {getNav(!!auth.getToken(), location.pathname)}
                </Nav>
              </StickyNav>
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={HomePage} />
                  <UnprotectedOnlyRoute
                    exact
                    path="/auth"
                    component={AuthPage}
                  />
                  <UnprotectedOnlyRoute
                    exact
                    path="/apply"
                    component={RegisterForm}
                  />
                  <ProtectedRoute exact path="/account" component={Account} />
                  <ProtectedRoute exact path="/test" component={SecurePage} />
                  <ProtectedRoute exact path="/logout" component={LogOut} />
                  <Route component={NotFoundPage} />
                </Switch>
              </AnimatePresence>
            </>
          )}
        />
      </ThemeProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
