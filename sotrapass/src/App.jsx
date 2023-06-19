import { useState } from 'react'
import { Routes , Route , useNavigate} from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/register'
import Header from './Components/Header'
import UserHeader from './Components/UserHeader'
import CodeQRModal from './Components/CodeQRModal';
import MoreInfo from './Components/MoreInfo';
import Footer from './Components/Footer';



function App() {

  return (
    <>
    {/* < Footer /> */}
    {/* <Login /> */}
    {/* < MoreInfo /> */}
    {/* < DashboardUser /> */}
    <Register />
    {/* <CodeQRModal /> */}
    {/* <Register /> */}
    </>
  )
}

export default App
