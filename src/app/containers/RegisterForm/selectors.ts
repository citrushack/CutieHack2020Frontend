import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.registerForm || initialState;

export const selectRegisterForm = createSelector(
  [selectDomain],
  registerFormState => registerFormState,
);

export const selectFormData = createSelector(
  [selectDomain],
  registerFormState => registerFormState.postData,
);

export const selectError = createSelector(
  [selectDomain],
  registerFormState => registerFormState.error,
);
