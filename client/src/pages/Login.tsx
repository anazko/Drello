import { useState } from "react"
import { useDispatch } from "react-redux"
import { Alert, Card, Divider, Layout, Row } from "antd"
import LoginForm from "../components/LoginForm"
import { IUser } from "../models/user"
import { userAPI } from "../api/userAPI"
import { userActionCreators } from "../store/reducers/user/actionCreators"

const Registration: React.FC = () => {

  const dispatch = useDispatch()
  const [registration, setRegistration] = useState(false)
  const [error, setError] = useState('')

  const toggleRegistration = (bool: boolean) => {
    setError('')
    setRegistration(bool)
  }

  const submitHandler = async (email: string, password: string) => {
    try {
      let user: IUser
      user = registration ?
        await userAPI.registration(email, password)
      :
        await userAPI.login(email, password)
      dispatch(userActionCreators.setUser(user))
      dispatch(userActionCreators.setIsAuth(true))
    }
    catch (e: any) {
      console.log("Error in login: ", e.message)
      setError(e.message)
    }
  }

  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card
          headStyle={{ fontSize: "22px", background: "#222", color: "white" }}
          title={ registration ? "Регистрация:" : "Вход:" }
          bordered={false} 
          style={{ width: 400 }}
        >
          {(error !== '') && <Alert
            style={{ marginBottom: "20px" }}
            message={error}
            type="error"
            closable
            onClose={ () => setError('') }
            showIcon={true}
          />}
          <LoginForm 
            onSubmit={ submitHandler } 
            registration={registration} 
          />
          <Divider />
          {
            registration ?
              <div>
                Уже зарегистрированы? <span className="loginToggle" onClick={ () => toggleRegistration(false) }>Войдите</span>
              </div>
            :

              <div>
                Нет аккаунта? <span className="loginToggle" onClick={ () => toggleRegistration(true) } >Зарегистрируйтесь</span>
              </div>
          }
          
        </Card>
      </Row>
    </Layout>

  )
}

export default Registration