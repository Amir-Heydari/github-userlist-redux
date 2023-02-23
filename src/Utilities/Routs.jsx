import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import UserListFinal from '../pages/UserListFinal';
import SpecialUser from '../pages/SpecialUser'
import Options from '../pages/Options';
import { useSelector } from 'react-redux'

function Navigation() {

  const textColor = useSelector((state) => state.options.text);
  const borderColor = useSelector((state) => state.options.border);
 
  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/about' element={<About/>} />

        <Route path='/users' element={<UserListFinal textColor={textColor} borderColor={borderColor}/>} />

        <Route path='/users/:specialuser' element={<SpecialUser textColor={textColor} borderColor={borderColor}/>} />

        <Route path='/options' element={<Options/>} />

      </Routes>
    </>
  )
}

export default Navigation
