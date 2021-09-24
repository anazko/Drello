import { useSelector } from "react-redux"
import { Switch, Route, Redirect } from "react-router-dom"
import { publicRoutes, privateRoutes, routePaths } from "../router"
import { RootState } from "../store"

const AppRouter: React.FC = () => {
  
  const isAuth = useSelector( (state: RootState) => state.userReducer.isAuth )

  return isAuth ? (

    <Switch>
      {
        privateRoutes.map(({path, exact, component}) => (
          <Route path={path} exact={exact} key={path} component={component} />
        ))
      }
      <Redirect to={ routePaths.HOME_ROUTE } />
    </Switch>

  ) : (

    <Switch>
      {
        publicRoutes.map(({path, exact, component}) => (
          <Route path={path} exact={exact} key={path} component={component} />
        ))
      }
      <Redirect to={ routePaths.LOGIN_ROUTE } />
    </Switch>

  )
}

export default AppRouter