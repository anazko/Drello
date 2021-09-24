import { uniqueUserId } from "./user"

export type uniqueWorkspaceId = string

export interface IWorkspace {
  id: uniqueWorkspaceId
  userId: uniqueUserId
  title: string
  contributors?: string[]
}