import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { getDocs , userCollection} from '../assets/DB/firebase';

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState(1);
  const [currentSubSection, setCurrentSubSection] = useState(5);
  const [userInfo, setUserInfo] = useState(null);
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
    <div className='User-section'>
      
      {/* <NavSection /> */}
      <h3>Dashboard user</h3>
      
      <div className="banner">
        <h1>User Dashboard</h1>
        {userInfo && (
        <div>
          <h2>Informations de l'utilisateur</h2>
          <p>Nom: {userInfo.nom}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      )}
      </div>
      
     
    </div>
   
  );
}