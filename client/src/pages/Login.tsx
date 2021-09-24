import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { Card, Divider, Layout, Row } from "antd"
import LoginForm from "../components/LoginForm"
import { routePaths } from "../router"
import { userAPI } from "../api/userAPI"
import { userActionCreators } from "../store/reducers/user/actionCreators"
import { IUser } from "../models/user"
import { useState } from "react"


const Registration: React.FC = () => {

  const dispatch = useDispatch()
  const [registration, setRegistration] = useState(false)

  const submitHandler = async (email: string, password: string) => {
    try {
      let user: IUser
      if (registration) {
        user = await userAPI.registration(email, password)
      } else {
        user = await userAPI.login(email, password)
      }
      dispatch(userActionCreators.setIsAuth(true))
      dispatch(userActionCreators.setUser(user))
    }
    catch (e: any) {
      console.log(e.message);
    }
  }

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card
          headStyle={{ fontSize: "22px", background: "#222", color: "white" }}
          title={ registration ? "Регистрация:" : "Вход:" }
          bordered={false} 
          style={{ width: 350 }}
        >
          <LoginForm onSubmit={ submitHandler } registration={registration} />
          <Divider />
          {
            registration ?
              <div>
                Уже зарегистрированы? <span className="loginToggle" onClick={ () => setRegistration(false) }>Войдите</span>
              </div>
            :

              <div>
                Нет аккаунта? <span className="loginToggle" onClick={ () => setRegistration(true) } >Зарегистрируйтесь</span>
              </div>
          }
          
        </Card>
      </Row>
    </Layout>

  )
}

export default Registration