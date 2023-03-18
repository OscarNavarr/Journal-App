import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/index'

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);
    return <CheckingAuth/>
  return (
    <Routes>
        {/* Login y Registro */}
        <Route path='/auth/*' element={<AuthRoutes/>}/>   

        {/* Journal App */}
        <Route path='/*' element={<JournalRoutes/>}/> 
    </Routes>
  )
}
