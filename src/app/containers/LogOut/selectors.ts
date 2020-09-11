import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.logOut || initialState;

export const selectLogOut = createSelector(
  [selectDomain],
  logOutState => logOutState,
);
