import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Explore} from './Explore'
import {Advertise} from './Advertise'
import {Blog} from './Blog'
import {Login} from './Login'
import {Signup} from './Signup'
const AllRoutes = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />        
        <Route path="/advertise" element={<Advertise />} />        
        <Route path="/blog" element={<Blog />} />        
        <Route path="/login" element={<Login />} />        
        <Route path="/signup" element={<Signup />} />        
        </Routes>
    </>
  )
}

export default AllRoutes