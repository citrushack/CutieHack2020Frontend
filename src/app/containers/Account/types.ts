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
  provider: string;
  resume: { url: string; name: string };
  role: Object;
  year: string;
  group: Object;
} & mongoEntry;
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

export type mongoEntry = {
  __v: number;
  _id: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type groupInfoPayload = PayloadAction<
  | ({
      uid: string;
      users: Array<Object>;
    } & mongoEntry)
  | null,
  any
>;

export type AccountDetails = AccountTable & ExtraAccountDetails;

export interface AccountState {
  info: AccountDetails;
  error: string;
  postData: postDataPayload;
  isFetching: boolean;
  groupInfo: groupInfoPayload;
}

export type ContainerState = AccountState;
