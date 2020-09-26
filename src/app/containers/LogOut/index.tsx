/**
 *
 * LogOut
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectLogOut } from './selectors';
import { pageVariants } from '../../animations';
import { motion } from 'framer-motion';
import { actions } from './slice';
import { useSignOut } from 'react-auth-kit';

interface Props {}

const useMountEffect = fun => useEffect(fun, []);

export function LogOut(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const logOut = useSelector(selectLogOut);
  const signOut = useSignOut();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  useMountEffect(() => {
    signOut();
    window.localStorage.clear();
    dispatch(actions.resetState({}));
  });
  return (
    <motion.div
      className="mainCard"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <h1 className="title">See ya soon!</h1>
    </motion.div>
  );
}
