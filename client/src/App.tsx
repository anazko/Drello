import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AppHeader from './components/AppHeader'
import AppRouter from './components/AppRouter'
import Loader from './components/Loader'
import { userAPI } from './api/userAPI'
import { userActionCreators } from './store/reducers/user/actionCreators'
import './App.css'

import { Layout } from 'antd';
const { Content } = Layout;

const App: React.FC = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await userAPI.check()
        const user = await userAPI.getProfile()
        dispatch(userActionCreators.setUser(user))
        dispatch(userActionCreators.setIsAuth(true))
      } catch (e: any) {
        console.log("Auth error:", e.message)
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [dispatch])

  if (loading) return <Loader/>

  return (
    <Layout>
      <AppHeader/>
      <AppRouter/>
    </Layout>
  )
}

export default App
