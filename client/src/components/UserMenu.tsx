import { Button, Divider } from "antd"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IUser } from "../models/user"
import { RootState } from "../store"
import { userActionCreators } from "../store/reducers/user/actionCreators"

interface Props {
  setMenuVisible: (bool: boolean) => void
}
 
const UserMenu: React.FC<Props> = ({ setMenuVisible }) => {

  const dispatch = useDispatch()
  const user: IUser = useSelector((state: RootState) => state.userReducer.user)
  const ref: any = useRef(null)

  const hideMenu = (e: any) => {
    if (ref.current && !ref.current.contains(e.target) && !e.target.classList.contains("avatar-wrapper")) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", hideMenu)
    return () => {
      document.removeEventListener("click", hideMenu)
    }    
  })

  const logOut = () => {
    localStorage.removeItem('token')
    dispatch(userActionCreators.setIsAuth(false))
    dispatch(userActionCreators.setUser({} as IUser))
  }

  return (
    <div className="user-menu" ref={ref}>
      <div className="user-menu-header">
        <h3>Учетная запись</h3>
        <span className="close-user-menu-btn" onClick={ () => setMenuVisible(false) }>✕</span>
      </div>
      { user.fullName && user.fullName}
      { user.email }
      <Divider />
      Редактировать профиль
      <Divider />
      <Button type="primary" onClick={ () => logOut() } >Выйти</Button>
    </div>
  )
}
 
export default UserMenu