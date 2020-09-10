/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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
import Navigation from 'react-sticky-nav';
import { css } from 'styled-components';
import getTheme from './theme';
import './styles.css';

const Navstyles = css`
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  height: 64px;
  position: -webkit-sticky; /* This is needed for Safari support */
`;

const theme = getTheme({
  paletteType: 'light',
});
export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Navigation css={Navstyles}>Nav</Navigation>,
      <ThemeProvider theme={theme}>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={HomePage} />
                <UnprotectedOnlyRoute exact path="/auth" component={AuthPage} />
                <UnprotectedOnlyRoute
                  exact
                  path="/register"
                  component={RegisterForm}
                />
                <ProtectedRoute exact path="/account" component={Account} />
                <ProtectedRoute exact path="/test" component={SecurePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </ThemeProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
