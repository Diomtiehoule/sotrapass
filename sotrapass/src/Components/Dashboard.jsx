import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import { getDocs , userCollection} from '../assets/DB/firebase';
import Parametre from './Parametre';
import CodeQRModal from './CodeQRModal';
import DashboardUser from './DashboardUser';
import Ticket from './Ticket';

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState(1);
  const [currentSubSection, setCurrentSubSection] = useState(5);
  const [userInfo, setUserInfo] = useState({});
  let { id } = useParams();
  console.log('ID:', id);
  
  async function GetInfosUser(id) {
    try {
      const querySnapshot = await getDocs(userCollection);
      for (const doc of querySnapshot.docs) {
        const documentData = doc.data();
        const documentId = doc.id;
        if (id === documentId) {
          setUserInfo(documentData);
        }
      }
      console.log("DashBoard");
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des documents :", error);
    }
  }

  useEffect(() => {
    GetInfosUser(id);
  }, [id]);

  
  return (
    <>
             <Routes>
               <Route path='/:id' element={<Parametre />}/>
                <Route path='/parametre/:id'  element={< Parametre />}/>
                <Route path='/codeQRModal/:id'  element={< CodeQRModal />}/>
                <Route path='/ticket/:id'  element={< Ticket />}/>
                <Route path='/dashboardUser/:id'  element={< DashboardUser />}/>
                
             </Routes>
    </>
  )
}