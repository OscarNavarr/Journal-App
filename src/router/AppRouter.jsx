import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/index'
import { useCheckAuth } from '../hooks'

export const AppRouter = () => {
    
    const {status} = useCheckAuth();

    if( status === 'checking' ){
      return <CheckingAuth/>
    }
  return (
    <Routes>
        {/* Login y Registro */}
        <Route path='/auth/*' element={<AuthRoutes/>}/>   

        {/* Journal App */}
        <Route path='/*' element={<JournalRoutes/>}/> 
    </Routes>
  )
}
