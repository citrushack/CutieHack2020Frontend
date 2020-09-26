// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import {
  postDataPayload,
  postErrorPayload,
  groupInfoPayload,
  statusInfoPayload,
} from './types';
// import { PayloadAction } from '@reduxjs/toolkit';

// The initial state of the Account container
export const initialState: ContainerState = {
  error: '',
  postData: {} as postDataPayload,
  isFetching: false,
  groupInfo: {} as groupInfoPayload,
  statusInfo: {} as statusInfoPayload,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    joinGroup(state, action: postDataPayload) {
      state.postData.payload = action.payload;
      state.isFetching = true;
    },
    joinGroupFailed(state, action: postErrorPayload) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    joinGroupSucc(state, action: groupInfoPayload) {
      state.groupInfo.payload = action.payload;
      state.error = '';
      state.isFetching = false;
    },
    leaveGroup(state) {
      state.isFetching = true;
    },
    leaveGroupFail(state, action: postErrorPayload) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    leaveGroupSucc(state) {
      state.groupInfo.payload = null;
      state.error = '';
      state.isFetching = false;
    },
    generateCode(state) {
      state.isFetching = true;
    },
    generateCodeFail(state, action: postErrorPayload) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    generateCodeSucc(state, action: groupInfoPayload) {
      state.groupInfo.payload = action.payload;
      state.error = '';
      state.isFetching = false;
    },
    refreshGroup(state) {
      state.isFetching = true;
    },
    refreshGroupFail(state, action: postErrorPayload) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    refreshGroupSucc(state, action: groupInfoPayload) {
      state.groupInfo.payload = action.payload;
      state.error = '';
      state.isFetching = false;
    },
    clearGroupInfo(state) {
      state.groupInfo.payload = null;
      state.isFetching = false;
    },
    refreshStatus(state) {
      state.isFetching = true;
    },
    refreshStatusFail(state, action: postErrorPayload) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    refreshStatusSucc(state, action: statusInfoPayload) {
      state.statusInfo.payload = action.payload;
      state.error = '';
      state.isFetching = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = accountSlice;
