import jwt_decode from "jwt-decode"
import { $host } from "."
import { IUser } from "../models/user"

export const userAPI = {

  login: async (email: string, password: string): Promise<any> => {
    const response: any = await $host.post('/api/user/register', {email, password})
    localStorage.setItem('token', response.data.token)
    const user: IUser = jwt_decode(response.data.token)
    return { id: user.id, email: user.email, role: user.role } 
  },

  registration: async (email: string, password: string): Promise<any> => {
    const response: any = await $host.post('/api/user/register', {email, password})
    localStorage.setItem('token', response.data.token)
    const user: IUser = jwt_decode(response.data.token)
    return { id: user.id, email: user.email, role: user.role } 
  },

  check: async () => {

  },

  logout: async () => {

  }

}