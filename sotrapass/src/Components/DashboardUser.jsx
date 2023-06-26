import React, { useState , useEffect } from 'react';
import './css/DashboardUser.css'
import { getDocs , userCollection } from '../assets/DB/firebase';
import { Link, useParams } from 'react-router-dom';

function DashboardUser() {

    let { id } = useParams();
  console.log('ID:', id);

    // recuperer les document de notre  collections pour pouvoir les afficher 
    // const [ currentSection , setCurrentSection] = useState(1);
    // const [ currentSubSection , setCurrentSubSection] = useState(5);
    const [userInfo , setUserInfo] = useState({})
    const [ compte , setCompte] = useState(0);
    console.log(compte);

    async function GetInfosUser(id) {
        try {
          const querySnapshot = await getDocs(userCollection);
          for (const doc of querySnapshot.docs) {
            const documentData = doc.data();
            const documentId = doc.id;
            if (id === documentId) {
              setUserInfo(documentData);
              console.log(userInfo)
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

      console.log(userInfo)

    return (
        <>
            <div className='headerDashboard'>
                <h1 className='nameSotra'>MaSotra</h1>
            </div>

            <div className="barreLaterale">
                <div className="userProfile">
                    <div className="photoProfile">

                    </div>
                    <div className="nameUser">
                        {/* l'endroit ou je afficher le nom de l'utilisateur depuis la base de données */}
                        <p>{userInfo.nom}</p>
                    </div>
                </div>

                <div className="allMenu">
                    <div className="menu">
                        <p className='pMenu'><Link to="/Ticket">Se déplacer <i class="fa-sharp fa-solid fa-ticket"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenuP'><Link to='/DasboardUser'>Rechargement <i class="fa-solid fa-wallet"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'><Link to='/Parametre'>Paramètre <i class=" fa fa-thin fa-gear"></i></Link></p>
                    </div>

                    <div className="signOut">
                        <p className='pSignOut'>Déconnexion</p>
                    </div>
                </div>
            </div>

            <div className="rechargement">
                <h3>Recharger votre compte</h3>

                <h4>Matricule client : </h4>

                <form action="">
                <div className="inputsRechargement">
                    <div className="nomUser">
                    <label htmlFor="">Nom :</label><br />
                    <input type="text"
                    className='nomUser'
                    
                    placeholder='Nom...' />
                    </div>
                    
                    <div className="prenom">
                    <label htmlFor="">Prenom :</label><br />
                    <input type="text"
                    className='prenom'
                    
                    placeholder='Prenom...' />
                    </div>
                    
                    <div className="compte">
                    <label htmlFor="">numero de compte :</label><br />
                    <input type="tel"
                    className='tel'
                    
                    placeholder='00-00-00-00-00' />
                    </div>
                   
                   <div className="number">
                   <label htmlFor="">Montant :</label><br />
                    <input type="number"
                    className='number'
                    placeholder='xxxFRCS'
                    
                    onChange={(e)=>{
                        setCompte(e.target.value);
                    }}
                     />
                   </div>
                    
                </div>

                <button className='submitRechargement'>Recharger</button>
                </form>
            </div>
            
        </>
    );
}

export default DashboardUser;