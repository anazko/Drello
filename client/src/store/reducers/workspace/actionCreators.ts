import { AppDispatch } from "../..";
import { workspaceAPI } from "../../../api/workspaceAPI";
import { IWorkspace } from "../../../models/workspace";
import { workspaceActionsEnum } from "./types";

export const workspaceActionCreators = {

  setWorkspaces: (payload: IWorkspace[]) => {
    return {
      type: workspaceActionsEnum.SET_WORKSPACES,
      payload
    }
  },

  fetchWorkspaces: () => async (dispatch: AppDispatch) => {
    try {
      const workspaces =  await workspaceAPI.getAllWorkspaces()
      dispatch(workspaceActionCreators.setWorkspaces(workspaces))
    }
    catch {
      console.log("error workspaceActionCreators")
    }
  }

}