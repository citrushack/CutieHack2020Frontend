//import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, registerPostData, postErrorPayload } from './types';
// The initial state of the RegisterForm container
export const initialState: ContainerState = {
  isFetching: false,
  error: '',
  postData: {} as registerPostData,
};

const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    submit(state, action: registerPostData) {
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
  },
});

export const { actions, reducer, name: sliceKey } = registerFormSlice;
