import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.account || initialState;

export const selectAccount = createSelector(
  [selectDomain],
  accountState => accountState,
);
export const selectAccountInfo = createSelector(
  [selectDomain],
  accountState => accountState.info,
);
