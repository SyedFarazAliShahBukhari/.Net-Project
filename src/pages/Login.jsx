import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   let navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false); 
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

 function submitHandler(e){
        e.preventDefault()
        if(!name || !email || !password){
            toast.error("required field are missing!")
        }else{
          toast.success(`Welcome ${name}`)
          navigate("/")
          localStorage.setItem("isLogin", true)
          localStorage.setItem("user", name)
        }
    }

  return (
    <>
      <style>
        {`
          @keyframes fadeScaleIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .fade-scale-in {
            animation: fadeScaleIn 0.5s ease forwards;
          }
          input:focus {
            outline: none;
            border-color: #60a5fa;
            box-shadow: 0 0 8px rgba(96, 165, 250, 0.6);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }
          .btn-animate:hover {
            background-color: #2563eb;
            color: white;
            transform: scale(1.05);
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.6);
          }
        `}
      </style>

      <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
        <form
          onSubmit={submitHandler}
          className={`p-6 sm:p-8 md:p-10 flex flex-col items-center bg-gray-800 gap-5 text-white shadow-[15px_15px_15px_rgba(128,128,128,0.5)] rounded-xl text-center max-w-md w-full
            ${animate ? 'fade-scale-in' : ''}
          `}
          action="submit"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            LOGIN
          </h1>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border text-white border-gray-300 p-3 rounded-md w-full text-gray-900 placeholder-gray-500 text-base sm:text-lg md:text-xl"
            placeholder="Enter Your Name"
            type="text"
            required
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border  text-white border-gray-300 p-3 rounded-md w-full text-gray-900 placeholder-gray-500 text-base sm:text-lg md:text-xl"
            placeholder="Enter Your Email"
            type="email"
            required
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border  text-white border-gray-300 p-3 rounded-md w-full text-gray-900 placeholder-gray-500 text-base sm:text-lg md:text-xl"
            placeholder="Enter Your Password"
            type={showPassword ? 'text' : 'password'} // toggle type here
            required
          />

          {/* Show Password toggle */}
          <label className="self-start flex items-center gap-2 text-gray-300 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-400"
            />
            Show Password
          </label>

          <button
            type="submit"
            className="btn-animate w-full p-3 rounded-md bg-white text-black font-semibold text-lg sm:text-xl md:text-2xl cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

