import React from 'react'
import Signup from './components/Singup'
import Login from './components/Login.'
import Home from './components/Home'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'


const App:React.FC = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login"/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/singup' element={<Signup/>}/>
      <Route path='/home' element={< Home/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App