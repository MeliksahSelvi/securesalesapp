import {DataState} from "../enum/datastate.enum";
import {User} from "./user";
import {Events} from "./events";
import {Role} from "./role";
import {Customer} from "./customer";

export interface LoginState {
  dataState: DataState;
  loginSuccess?: boolean;
  error?: string;
  message?: string;
  isUsingMfa?: boolean;
  phone?: string;
}

export interface CustomHttpResponse<T> {
  timeStamp: Date;
  statusCode: number;
  status: string,
  message: string;
  reason?: string;
  data?: T;
}

export interface Profile {
  user?: User;
  events: Events[];
  roles: Role[];
  access_token: string;
  refresh_token: string;
}

export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  size: number;
  number: number;
}

export interface CustomerState{
  user:User;
  customer:Customer
}

export interface RegisterState{
  dataState:DataState;
  registerSuccess?:boolean;
  error?:string;
  message?:string;
}

export type AccountType='account'|'password';
export interface VerifyState{
  dataState:DataState;
  verifySuccess?:boolean;
  error?:string;
  message?:string;
  title?:string;
  type?:AccountType;
}
