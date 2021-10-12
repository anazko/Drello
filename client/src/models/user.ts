export type uniqueUserId = string

export interface IUser {
  id: uniqueUserId
  email: string
  fullName?: string
  description?: string
  avatar?: string
}