import { LogOut } from 'lucide-react'
import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()
  function logoutHandler(){
    localStorage.removeItem("isLogin")
    navigate("/login")
  }

  let navlink = [
    { name: "Home", path:"/"},
    { name: "About", path:"/About"},
   
  ]

  
  return (
   <div className="shadow-2xl bg-gray-800 h-24 flex items-center px-24 justify-between">
      <div className='flex text-lg items-center font-semibold gap-4'>
        {
        navlink.map((item, index)=>(
           <NavLink to={item.path} key={index} className={({isActive}) => isActive ? "p-2 rounded-md bg-gray-200 text-green-600" :"text-white"  }>{item.name}</NavLink>
        ))
        
        }
      </div>
        <button onClick={logoutHandler} className='p-2 bg-red-900 text-white flex text-xl items-center rounded-md font-bold'  ><LogOut/></button>
      
    </div>
  )
}

export default Navbar
