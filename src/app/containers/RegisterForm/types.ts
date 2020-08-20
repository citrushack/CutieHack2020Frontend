import { PayloadAction } from '@reduxjs/toolkit';

/* --- STATE --- */
export interface RegisterFormState {
  isFetching: boolean;
  error: PayloadAction;
  postData: registerPostData;
}

export type ContainerState = RegisterFormState;

export type registerPostData = PayloadAction<
  {
    username: string;
    email: string;
    password: string;
    addr1?: string;
    addr2: string;
    country: string;
    city: string;
    state?: string;
    zip?: string;
    firstname: string;
    lastname: string;
    gender?: string;
    school?: string;
    major?: string;
    extra?: string;
    resume: FormData;
    linkedin?: string;
    github?: string;
    rememberMe?: boolean;
  },
  any
>;

//Initally when we post we cant send the resume as the upload route is for protected
//users only. This type is basically the same as the one above but without resume, so
//we can use the 'as' keyword to slim the above type down on initial send.
export type initialsend = PayloadAction<
  {
    username: string;
    email: string;
    password: string;
    addr1?: string;
    addr2: string;
    country: string;
    city: string;
    state?: string;
    zip?: string;
    firstname: string;
    lastname: string;
    gender?: string;
    school?: string;
    major?: string;
    extra?: string;
    linkedin?: string;
    github?: string;
    rememberMe?: boolean;
  },
  any
>;
