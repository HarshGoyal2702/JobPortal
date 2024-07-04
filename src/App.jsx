import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
   <Navbar/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
