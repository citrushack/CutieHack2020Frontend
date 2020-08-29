// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import auth from 'utils/auth';
import { postDataPayload, postErrorPayload } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

// The initial state of the Account container
export const initialState: ContainerState = {
  info: auth.getUserInfo(),
  error: '',
  postData: {} as postDataPayload,
  isFetching: false,
};

const accountSlice = createSlice({
  name: 'account',
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
    submitSucc(state) {
      state.isFetching = false;
    },
    generateCode(state) {
      state.isFetching = true;
    },
    generateCodeFail(state) {
      state.isFetching = false;
    },
    generateCodeSucc(state) {
      state.isFetching = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = accountSlice;
