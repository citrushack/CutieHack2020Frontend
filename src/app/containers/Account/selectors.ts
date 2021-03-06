import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.account || initialState;

export const selectAccount = createSelector(
  [selectDomain],
  accountState => accountState,
);

export const selectFormData = createSelector(
  [selectDomain],
  accountState => accountState.postData,
);

export const selectError = createSelector(
  [selectDomain],
  accountState => accountState.error,
);

export const selectisFetching = createSelector(
  [selectDomain],
  accountState => accountState.isFetching,
);
export const selectStatusInfo = createSelector(
  [selectDomain],
  accountState => accountState.statusInfo,
);

export const selectGroup = createSelector(
  [selectDomain],
  accountState => accountState.groupInfo,
);
