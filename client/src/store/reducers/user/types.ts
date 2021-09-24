import { IUser } from "../../../models/user"

export interface userState {
  isAuth: boolean,
  user: IUser | null
}

export enum userActionEnum {
  SET_ISAUTH = 'SET_ISAUTH',
  SET_USER = 'SET_USER'
}

