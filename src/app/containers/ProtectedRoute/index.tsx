/**
 *
 * ProtectedRoute
 *
 */

import React, { useEffect } from 'react';
import { Route, Redirect, RedirectProps } from 'react-router-dom';
import auth from 'utils/auth';
import { motion } from 'framer-motion';

const MotionRedirect: React.FC<RedirectProps> = ({ children, ...props }) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

function ProtectedOnlyRoute({ component: Component, ...rest }) {
  console.log('rerender');
  if (!!!auth.getToken()) {
    return <MotionRedirect push to="/auth" />;
  } else {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
}

export default ProtectedOnlyRoute;
