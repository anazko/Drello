export type uniqueUserId = string

export interface IUser {
  id: uniqueUserId
  username?: string
  fullname?: string
  email: string
  role: string
  avatar?: string
}