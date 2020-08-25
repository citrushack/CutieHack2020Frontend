import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import auth from 'utils/auth';

// The initial state of the Account container
export const initialState: ContainerState = {
  info: auth.getUserInfo(),
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = accountSlice;
