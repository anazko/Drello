
import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IUser } from "../models/user"
import { RootState } from "../store"
import UserMenu from "./UserMenu"

const UserBar = () => {

  const user: IUser = useSelector((state: RootState) => state.userReducer.user)
  const isAuth: boolean = useSelector((state: RootState) => state.userReducer.isAuth)
  const [menuVisible, setMenuVisible] = useState(false)

  const menuVisibleToggle = () => {
    setMenuVisible(menuVisible ? false : true)
  }

  if (!isAuth || !user.id) return null
  return (
    <div className="user-bar">
      <div className="avatar-wrapper" onClick={ menuVisibleToggle }>
        <img src={ user.avatar } />
      </div>
      {menuVisible && <UserMenu setMenuVisible={setMenuVisible} />}
    </div>
  )
}

export default UserBar