import { createSlice } from 'utils/@reduxjs/toolkit';
//import request from 'utils/request';
//import { all, call, put } from 'redux-saga/effects';
//import auth from 'utils/auth.js';
//import { LOCATION_CHANGE } from 'react-router-redux';
//import { ContainerState } from './types';
//import { createModule } from 'saga-slice';
//import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, postDataPayload, postErrorPayload } from './types';

// The initial state of the AuthPage container
export const initialState: ContainerState = {
  isFetching: false,
  postData: {} as postDataPayload,
  error: '',
};

const authPageSlice = createSlice({
  name: 'authPage',
  initialState,
  reducers: {
    submit(state, action: postDataPayload) {
      state.postData.payload = action.payload;
      state.isFetching = true;
    },
    submitFailed(state, action: postErrorPayload) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authPageSlice;
