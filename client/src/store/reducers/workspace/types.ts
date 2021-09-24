import { IWorkspace } from "../../../models/workspace";

export enum workspaceActionsEnum {
  SET_WORKSPACES = "SET_WORKSPACES",
  ADD_WORKSPACE = "ADD_WORKSPACE",
  FETCH_WORKSPACE = "FETCH_WORKSPACES"
}

export interface workspaceState {
  workspaces: IWorkspace[]
  current: string | null
}

export interface setWorkspacesAction {
  type: workspaceActionsEnum.SET_WORKSPACES
  payload: IWorkspace[]
}

export interface addWorkspaceAction {
  type: workspaceActionsEnum.ADD_WORKSPACE
  payload: IWorkspace
}

export interface fetchWorkspacesAction {
  
}

export type workspaceAction = 
  setWorkspacesAction | 
  addWorkspaceAction |
  fetchWorkspacesAction