import { uniqueWorkspaceId } from "./workspace"

export type uniaueBoardId = string

export interface IBoard {
  id: uniaueBoardId
  title: string
  workspaceId: uniqueWorkspaceId
}