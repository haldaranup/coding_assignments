import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'

const Admin = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <div>
        {!isAuth && <Login />}
    </div>
  )
}

export default Admin