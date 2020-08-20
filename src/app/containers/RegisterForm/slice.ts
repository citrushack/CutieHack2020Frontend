import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, registerPostData } from './types';
// The initial state of the RegisterForm container
export const initialState: ContainerState = {
  isFetching: false,
  error: {} as PayloadAction,
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
    submitSuccess(state) {
      state.isFetching = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = registerFormSlice;
