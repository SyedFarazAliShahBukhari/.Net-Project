import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    let [name, setName ] = useState("")
    let [email, setEmail ] = useState("")
    let [password, setPassword ] = useState("")
    let navigate = useNavigate()

    function submitHandler(e){
        e.preventDefault()
        if(!name || !email || !password){
            toast.error("required field are missing!")
        }else{
          toast.success(`Welcome ${name}`)
          navigate("/")
          localStorage.setItem("isLogin", true)
        }
    }
  return (
    <div className='flex items-center justify-center h-screen'> 
      <form onSubmit={submitHandler} className='p-5 flex flex-col items-center bg-gray-800 gap-3 text-white shadow-[15px_15px_15px_gray] rounded-xl text-center' action="submit"> 
        <h1 className='text-3xl p-3 font-bold'>LOGIN</h1>
        <input value={name} onChange={(e)=> setName(e.target.value)} className='border border-gray-300 p-2 rounded-md' placeholder='Enter Your Name' type="text" />
         <input value={email} onChange={(e)=> setEmail(e.target.value)} className='border border-gray-300 p-2 rounded-md' placeholder='Enter Your Email' type="email" />
          <input value={password} onChange={(e)=> setPassword(e.target.value)} className='border border-gray-300 p-2 rounded-md' placeholder='Enter Your Password' type="password" />
          <button className='w-full p-2 rounded-md bg-white text-black'>Submit</button>
      </form>
    </div>
  )
}

export default Login
