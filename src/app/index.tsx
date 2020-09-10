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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthPage } from './containers/AuthPage';
import { RegisterForm } from './containers/RegisterForm';
import { SecurePage } from './containers/SecurePage';
import { Account } from './containers/Account';
import Navigation from 'react-sticky-nav';
import { css } from 'styled-components';
import './styles.css';
import InputBase from '@material-ui/core/InputBase';

const Navstyles = css`
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  height: 64px;
  position: -webkit-sticky; /* This is needed for Safari support */
`;
function getTheme(theme) {
  return createMuiTheme({
    palette: {
      type: theme.paletteType,
      background: {
        default: theme.paletteType === 'light' ? '#00000' : '#fffff',
      },
      primary: {
        main: '#212121',
      },
    },
    overrides: {
      MuiOutlinedInput: {
        root: {
          position: 'relative',
          '& $notchedOutline': {
            borderColor: '#212121',
          },
          '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
            borderColor: '#212121',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              borderColor: '#212121',
            },
          },
          '&$focused $notchedOutline': {
            borderColor: '#212121',
            borderWidth: 1,
          },
        },
      },
      MuiFormLabel: {
        root: {
          color: '#404040',
        },
      },
    },
  });
}

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
