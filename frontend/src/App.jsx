import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userhome from './pages/Userhome'
import Register from './pages/Register'
import Login from './pages/Login'
import Adminhome from './pages/Adminhome'
import Landing from './pages/Landing'
import Employerhome from './pages/Employerhome'
import Jobregister from './pages/Jobregister'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'

const App = () => {
  
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Routes>      
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Userhome/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/admin' element={<Adminhome/>}/>
        <Route path='/employer' element={<Employerhome/>}/>
        <Route path='/jobregister' element={<Jobregister/>}/>
      </Routes>
    </div>
  )
}

export default App
