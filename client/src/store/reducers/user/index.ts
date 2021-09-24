import { userActionEnum, userState } from "./types"

const initialState: userState = {
  isAuth: false,
  user: null
}

export const userReducer = (state: userState = initialState, action: any) => {
    switch (action.type) {

      case userActionEnum.SET_ISAUTH: return { ...state, isAuth: action.payload }
      case userActionEnum.SET_USER:  return { ...state, user: action.payload }

      default:
        return state
    }
}