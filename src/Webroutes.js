import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

const Webroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default Webroutes