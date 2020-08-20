import { PayloadAction } from '@reduxjs/toolkit';

/* --- STATE --- */
export interface AuthPageState {
  isFetching: boolean;
  error: string;
  postData: postDataPayload;
}

export type postDataPayload = PayloadAction<
  {
    username: string;
    password: string;
    rememberMe?: boolean;
  },
  any
>;
export type postErrorPayload = PayloadAction<
  {
    message: string;
  },
  any
>;

export type ContainerState = AuthPageState;
