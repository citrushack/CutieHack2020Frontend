/* --- STATE --- */

export type AccountTable = {
  username: string;
  email: string;
  addr1?: string;
  addr2?: string;
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
};

export type ExtraAccountDetails = {
  blocked?: boolean;
  confirmed: boolean;
  created_at: string;
  id: number;
  provider: string;
  resume: Object;
  role: Object;
  updated_at: string;
  year?: string;
};
//ignore extra types lol
//i thought i could remove properties from downcasted items in typescript,
//turns out thats now how it works..

export type AccountDetails = AccountTable & ExtraAccountDetails;

export interface AccountState {
  info: AccountDetails;
}

export type ContainerState = AccountState;
