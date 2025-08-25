import React from 'react'
import Router from './route/Router'
import Navbar from './components/Navbar'
import StickyLayout from './components/StickyLayout'
import { useLocation } from 'react-router-dom'

const App = () => {
 
  return (
    <div>
      <StickyLayout/>
    </div>
  )
}

export default App
