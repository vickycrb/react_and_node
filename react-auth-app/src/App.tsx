import './App.css'
import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import Dashboard from './pages/dashboard'
import Header from './component/header'
import {AuthProvider} from './context/authContext'

function App() {

  return (
    <div className='bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex items-center justify-center'>
     <AuthProvider>
          <Router> 
            <Header />
            <Routes>       
              <Route path="*" element={<Navigate to="/login" replace />} />          
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<RegisterPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
      </AuthProvider>
    </div>
  )
}

export default App