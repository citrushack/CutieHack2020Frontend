import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the LogOut container
export const initialState: ContainerState = {};

const logOutSlice = createSlice({
  name: 'logOut',
  initialState,
  reducers: {
    resetState(state, action: PayloadAction<any>) {
      window.localStorage.clear();
    },
  },
});

export const { actions, reducer, name: sliceKey } = logOutSlice;
