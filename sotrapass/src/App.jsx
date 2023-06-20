import { useState } from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Header from './Components/Header'
import UserHeader from './Components/UserHeader'
import CodeQRModal from './Components/CodeQRModal';
import MoreInfo from './Components/MoreInfo';
import Footer from './Components/Footer';
import Parametre from './Components/Parametre';
import Register from './Components/Register';
import Ticket from './Components/Ticket';
import DashboardUser from './Components/DashboardUser'



function App() {

  return (
    <>

           <BrowserRouter>
           <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login'  element={< Login />}/>
            <Route path='/register'  element={< Register />}/>
            <Route path='/parametre'  element={< Parametre />}/>
            <Route path='/codeQRModal'  element={< CodeQRModal />}/>
            <Route path='/moreInfo'  element={< MoreInfo />}/>
            <Route path='/ticket'  element={< Ticket />}/>
            <Route path='/dashboardUser'  element={< DashboardUser />}/>
            
           </Routes>
           </BrowserRouter>

    {/* < Roots /> */}
    {/* < Footer /> */}
    {/* <Login /> */}
    {/* < MoreInfo /> */}
    {/* < DashboardUser /> */}
    {/* <Register /> */}
    {/* < Parametre /> */}
    {/* < Ticket /> */}
    {/* < Home /> */}
    {/* <CodeQRModal /> */}
    {/* <Home /> */}
    </>
  )
}

export default App
