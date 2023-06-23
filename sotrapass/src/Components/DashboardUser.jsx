import React, { useState , useEffect, useRef} from 'react';
import './css/DashboardUser.css'
import { getDocs , userCollection } from '../assets/DB/firebase';
import { Link, useParams } from 'react-router-dom';

function DashboardUser() {

    // recuperer les document de notre  collections pour pouvoir les afficher 
    const [ currentSection , setCurrentSection] = useState(1);
    const [ currentSubSection , setCurrentSubSection] = useState(5);
    const [userInfo , setUserInfo] = useState(null);
    const [ compte , setCompte] = useState(0);
    console.log(compte);


    let id = useParams();
    console.log('ID:', id);



    async function getInfoUser(id){
        try{
            const querySnapshot = await getDocs(userCollection);
            for(const doc of querySnapshot.docs){
                const documentData = doc.data();
                const documentID = doc.id;

                if(id === document.id){
                    setUserInfo(documentData);
                }
                console.log(documentData);
            }
            console.log('DashboardUser');
            
        }catch(err){
            console.log("une erreur s'est produit lors de la recuperation des documents :" , err)
        }
    }

    useEffect(()=>{
        getInfoUser(id);
    },[id]);

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
                        <p>User...</p>;
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