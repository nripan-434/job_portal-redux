import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userhome from './pages/user/Userhome'
import Register from './pages/Register'
import Login from './pages/Login'
import Adminhome from './pages/Adminhome'
import Landing from './pages/Landing'
import Employerhome from './pages/employer//Employerhome'
import Jobregister from './pages/employer/Jobregister'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Applications from './pages/user/Applications'
import JobApplicantions from './pages/employer/JobApplicantions'
import Applicants from './pages/employer/Applicants'
import UserApplications from './pages/user/UserApplications'
import Footer from './components/Footer'
import Reapply from './pages/user/Reapply'

const App = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster/>
      <Navbar/>

        <Routes >      
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Userhome/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/admin' element={<Adminhome/>}/>
        <Route path='/employer' element={<Employerhome/>}/>
        <Route path='/jobregister' element={<Jobregister/>}/>
        <Route path='/application/:jobid' element={<Applications/>}/>
        <Route path='/jobapplicantions' element={<JobApplicantions/>}/>
        <Route path='/applicants/:jobid' element={<Applicants/>}/>
        <Route path='/userapplications' element={<UserApplications/>}/>
        <Route path='/reapply/:appid/:jobid' element={<Reapply/>}/>
      </Routes>
    
      
      <Footer/>
    </div>
  )
}

export default App
