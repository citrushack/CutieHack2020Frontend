/**
 *
 * ProtectedRoute
 *
 */

import React from 'react';
import { Route, Redirect, RedirectProps } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import { motion } from 'framer-motion';

const MotionRedirect: React.FC<RedirectProps> = ({ children, ...props }) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

function UnprotectedOnlyRoute({ component: Component, ...rest }) {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated()) {
    return <MotionRedirect to="/account" />;
  } else {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
}

export default UnprotectedOnlyRoute;
