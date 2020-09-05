import { PayloadAction } from '@reduxjs/toolkit';
import { History } from 'history';
/* --- STATE --- */
export interface RegisterFormState {
  isFetching: boolean;
  error: string;
  postData: registerPostData;
}

export type ContainerState = RegisterFormState;

export type postDataPayload = {
  username: string;
  email: string;
  password: string;
  addr1: string;
  addr2: string;
  country: string;
  city: string;
  state: string;
  zip: string;
  firstname: string;
  lastname: string;
  gender: string;
  school: string;
  major: string;
  extra: string;
  resume: FormData | string;
  linkedin: string;
  github: string;
  year: string;
  rememberMe: boolean;
};

export type registerPostData = PayloadAction<
  postDataPayload & { history: History<any> },
  any
>;

export type postErrorPayload = PayloadAction<
  {
    message: string;
  },
  any
>;
