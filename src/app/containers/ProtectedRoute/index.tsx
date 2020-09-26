/**
 *
 * ProtectedRoute
 *
 */

import React from 'react';
import { Route, Redirect, RedirectProps } from 'react-router-dom';

import { motion } from 'framer-motion';
import { useIsAuthenticated } from 'react-auth-kit';

const MotionRedirect: React.FC<RedirectProps> = ({ children, ...props }) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

function ProtectedOnlyRoute({ component: Component, ...rest }) {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated()) {
    return <MotionRedirect push to="/auth" />;
  } else {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
}

export default ProtectedOnlyRoute;
