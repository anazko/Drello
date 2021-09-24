import { workspaceActionsEnum, workspaceState } from "./types";

const initialState: workspaceState = {
  workspaces: [],
  current: null
}

export const workspaceReducer = (state: workspaceState = initialState, action: any) => {
    switch (action.type) {

      case workspaceActionsEnum.ADD_WORKSPACE: {
        const newState = {...state}
        newState.workspaces = [...state.workspaces, action.payload]
        return newState
      }

      case workspaceActionsEnum.SET_WORKSPACES: {
        const newState = {...state}
        newState.workspaces = action.payload
        return newState
      }

      default:
        return state
    }
}