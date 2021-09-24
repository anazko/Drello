import { uniaueBoardId } from "./board";

export type uniqueTaskId = string

export interface ITask {
  id: uniqueTaskId
  title: string
  board: uniaueBoardId
  description?: string
}
