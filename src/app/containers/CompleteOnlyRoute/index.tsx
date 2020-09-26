import React, { useEffect } from 'react';
import { Route, Redirect, RedirectProps } from 'react-router-dom';

import { motion } from 'framer-motion';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';
import { createNextState } from '@reduxjs/toolkit';

const MotionRedirect: React.FC<RedirectProps> = ({ children, ...props }) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

function AppCompleteOnlyRoute({ component: Component, ...rest }) {
  const authU = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  console.log(authU());
  if (isAuthenticated()) {
    if (authU() && authU().appComplete) {
      return <Route {...rest} render={props => <Component {...props} />} />;
    } else {
      return <MotionRedirect push to="/apply" />;
    }
  } else {
    return <MotionRedirect push to="/auth" />;
  }
}

export default AppCompleteOnlyRoute;
//(auth.getUserInfo() && (auth.getUserInfo().appComplete as boolean)
