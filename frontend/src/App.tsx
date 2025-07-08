import React from 'react'
import Singup from './components/Singup'
import Login from './components/Login.'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'


const App:React.FC = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login"/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/singup' element={<Singup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App