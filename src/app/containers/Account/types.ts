/* --- STATE --- */
import { PayloadAction } from '@reduxjs/toolkit';

export type AccountTable = {
  username: string;
  email: string;
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
  linkedin: string;
  github: string;
};

export type ExtraAccountDetails = {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  _id: string;
  __v: number;
  provider: string;
  resume: { url: string; name: string };
  role: Object;
  updatedAt: string;
  year: string;
};
//ignore extra types lol
//i thought i could remove properties from downcasted items in typescript,
//turns out thats now how it works..

export type postErrorPayload = PayloadAction<
  {
    message: string;
  },
  any
>;
export type postDataPayload = PayloadAction<
  {
    groupCode: string;
  },
  any
>;

export type AccountDetails = AccountTable & ExtraAccountDetails;

export interface AccountState {
  info: AccountDetails;
  error: string;
  postData: postDataPayload;
  isFetching: boolean;
}

export type ContainerState = AccountState;
