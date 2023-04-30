import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'
import Footer from './components/Footer'

// add the beginning of your app entry
import 'vite/modulepreload-polyfill'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>}/> 
        </Routes>
      </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
