import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
    let isLogin = localStorage.getItem("isLogin")
  return (
    <div>
      {isLogin ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default Private
