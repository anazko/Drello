import React from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"

export enum routePaths {
  LOGIN_ROUTE = '/login',
  HOME_ROUTE = '/home',
  WORKSPACE = '/workspace'
}

export interface IRoute {
  path: routePaths
  component: React.ComponentType
  exact?: boolean
}

export const publicRoutes: IRoute[] = [
  {
    path: routePaths.LOGIN_ROUTE,
    component: Login,
    exact: true
  }
]

export const privateRoutes = [
  {
    path: routePaths.HOME_ROUTE,
    component: Home,
    exact: true
  }
]
