import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'

import About from '../pages/About'
import PageNotFound from '../pages/PageNotFound'
import Login from '../pages/Login'
import { ToastContainer } from 'react-toastify'
import Private from '../pages/Private'
import Setup from '../pages/Setup'
import Finance from '../pages/Finance'
import Procurement from '../pages/Procurement'
import Sales from '../pages/Sales'
import HumanResource from '../pages/HumanResource'
import Reports from '../pages/Reports'
import Admin from '../pages/Admin'
import Store from '../pages/Store'
import OtherReports from '../pages/OtherReports'
import Mainlayout from '../components/Mainlayout'

const Router = () => {

 

  return (
    <div> 
      <ToastContainer position="top-right" />
   
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element= {<Private/>}>
        <Route path='/' element={<Mainlayout/>} >
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Setup' element={<Setup/>}/>
        <Route path='/Finance' element={<Finance/>}/>
        <Route path='/Sales' element={<Sales/>}/>
        <Route path='/Procurement' element={<Procurement/>}/>
        <Route path='/HumanResource' element={<HumanResource/>}/>
        <Route path='/Reports' element={<Reports/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/OtherReports' element={<OtherReports/>}/>
       </Route>
        </Route>
        
      </Routes>
    </div>
  )
}

export default Router
