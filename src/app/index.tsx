/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import ProtectedRoute from './containers/ProtectedRoute';
import UnprotectedOnlyRoute from './containers/UnprotectedOnlyRoute';
import AppCompleteOnlyRoute from './containers/CompleteOnlyRoute';
import IncompleteOnlyRoute from './containers/IncompleteOnlyRoute';
import { ThemeProvider } from '@material-ui/core/styles';
import { AuthPage } from './containers/AuthPage';
import { RegisterForm } from './containers/RegisterForm';
import { SecurePage } from './containers/SecurePage';
import { Account } from './containers/Account';
import { LogOut } from './containers/LogOut';
import LoginRedirect from './containers/LoginRedirect/index.jsx';
import { AnimatePresence } from 'framer-motion';
//import Base, { styles as stickyNavStyles } from './containers/StickyNav';
// import { css } from 'styled-components';
import styled from 'styled-components';
import getTheme from './theme';

import './component-styles/styles.css';

const NavContainer = styled.div`
  padding: 1rem;
  width: 70rem;
  max-width: 100%;
  margin: 1rem auto;
  z-index: 100;
  top: 0;
  position: ${props => ((props as any).float ? 'absolute' : 'static')};
  left: ${props => ((props as any).float ? '0' : 'auto')};
  right: ${props => ((props as any).float ? '0' : 'auto')};
  @media (max-width: 768px) {
    padding: 0;
    margin: 0.4rem auto;
  }
` as any;

const Logo = styled.img`
  width: 4em;
`;
const Nav = styled.nav`
  background: #b0e7e8;
  border: 5px solid #94b4b5;
  box-shadow: 6px 6px 0 0px rgba(0, 0, 0, 0.45);
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  padding: 0 20px;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 16px 16px 0px -5px rgba(0, 0, 0, 0.45);
    transform: translateX(-5px);
  }
  ul {
    display: flex;
  }
  li {
    margin-right: 0.1rem;
    padding: 10px;
  }
  li:before {
    content: none;
  }
  .navLink {
    border: 5px solid #d5a638;
    font-size: 1em;
    background: #f5bb32;
    padding: 0.75rem;
    box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.45);
    border-radius: 22px;
    font-family: 'Fugaz One', cursive;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 2px 2px 0 #000;
    font-weight: 400;
    color: white;
  }
  a {
    text-decoration: none;
  }
  .navLink:hover {
    background: orange;
    color: white;
  }
  @media (max-width: 768px) {
    li {
      margin-right: 5px;
      padding: 1px;
    }
    .navLink {
      padding: 0.6rem;
      font-size: 0.8em;
      border: 3px solid rgb(213, 166, 56);
      margin-right: 6px;
    }
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
  const isAuthenticated = useIsAuthenticated();

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s" defaultTitle="Cutie Hack">
        <meta
          name="description"
          content="Cutie Hack is a 12-hour, beginner-oriented hackathon hosted at the University of California, Riverside."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cutiehack.io/api/" />
        <meta property="og:title" content="Cutie Hack" />
        <meta
          property="og:description"
          content="Cutie Hack is a 12-hour, beginner-oriented hackathon hosted at the University of California, Riverside."
        />
        <meta property="og:image" content="/thumb.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cutiehack.io/api/" />
        <meta property="twitter:title" content="Cutie Hack" />
        <meta
          property="twitter:description"
          content="Cutie Hack is a 12-hour, beginner-oriented hackathon hosted at the University of California, Riverside."
        />
        <meta property="twitter:image" content="/thumb.png" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Route
          render={({ location }) => (
            <>
              <NavContainer float={location.pathname === '/'}>
                <Nav>
                  <Logo alt="logo" src="/images/assets/icon.svg"></Logo>
                  {getNav(isAuthenticated(), location.pathname)}
                </Nav>
              </NavContainer>
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/connect/:providerName/redirect"
                    component={LoginRedirect}
                  />
                  <Route exact path="/" component={HomePage} />
                  <UnprotectedOnlyRoute
                    exact
                    path="/auth"
                    component={AuthPage}
                  />
                  <IncompleteOnlyRoute
                    exact
                    path="/apply"
                    component={RegisterForm}
                  />
                  <AppCompleteOnlyRoute
                    exact
                    path="/account"
                    component={Account}
                  />
                  <ProtectedRoute exact path="/test" component={SecurePage} />
                  <Route exact path="/logout" component={LogOut} />
                  <Route component={NotFoundPage} />
                </Switch>
              </AnimatePresence>
            </>
          )}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}
