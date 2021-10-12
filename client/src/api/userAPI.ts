import jwt_decode from "jwt-decode"
import { $host, $authHost } from "."
import { IUser } from "../models/user"

export const userAPI = {

  login: async (email: string, password: string): Promise<any> => {
    try {
      const response: any = await $host.post('/api/user/login', {email, password})
      localStorage.setItem('token', response.data.token)
      const user: IUser = jwt_decode(response.data.token)
      return { id: user.id, email: user.email } 
    }
    catch(e: any) {
      if (e.response) {
        throw e.response.data
      }
    }
  },

  registration: async (email: string, password: string): Promise<any> => {
    try {
      const response: any = await $host.post('/api/user/register', {email, password})
      localStorage.setItem('token', response.data.token)
      const user: IUser = jwt_decode(response.data.token)
      return { id: user.id, email: user.email } 
    }
    catch(e: any) {
      if (e.response) {
        throw e.response.data
      }
    }
  },

  check: async (): Promise<any> => {
    const response: any = await $authHost.get('/api/user/auth')
    localStorage.setItem('token', response.data.token)
    const user: IUser = jwt_decode(response.data.token)
    return user
  },

  getProfile: async (): Promise<any> => {
    try {
      const response: any = await $authHost.get('/api/user/profile')
      return response.data
    }
    catch(e: any) {
      if (e.response) {
        throw e.response.data
      }
    }
  }

}