import { IUser } from "../../../models/user";
import { userActionEnum } from "./types";

export const userActionCreators = {
    setUser: (user: IUser) => ({ type: userActionEnum.SET_USER, payload: user }),
    setIsAuth: (bool: boolean) => ({ type: userActionEnum.SET_ISAUTH, payload: bool })
}