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
import Base, { styles as stickyNavStyles } from './containers/StickyNav';
// import { css } from 'styled-components';
import styled from 'styled-components';
import getTheme from './theme';

import './styles.css';

const StickyNav = styled(Base)`
  background: url(/images/asfalt-dark.png), #b0e7e8;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.4);
  border-radius: 49px;
  height: 64px;
  padding: 20px 32px;
  margin: 2rem 2rem;
  margin-bottom: 3rem;
  position: -webkit-sticky;
  line-height: 24px;
  position: sticky;
  transition: all 125ms;
  top: 0;
`;
const Nav = styled.nav`
  ${stickyNavStyles};
  background: papayagreen;
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
      <StickyNav>
        <Nav>My custom navbar is</Nav>
      </StickyNav>
      <ThemeProvider theme={theme}>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={HomePage} />
                <UnprotectedOnlyRoute exact path="/auth" component={AuthPage} />
                <UnprotectedOnlyRoute
                  exact
                  path="/apply"
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
