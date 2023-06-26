import React , {useState , useEffect }from 'react';
import './css/Parametre.css'
import { doc , deleteDoc , userCollection , getDocs , db} from '../assets/DB/firebase';
import{ Link , useParams} from 'react-router-dom';

function Parametre() {

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
    

    // function pour supprimer un utilisateur de la base de données
    

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
                        <p id='userInfoName'>{userInfo.nom}</p>
                    </div>
                </div>

                <div className="allMenu">
                    <div className="menu">
                        <p className='pMenu'><Link to="/Ticket">Se déplacer <i class="fa-sharp fa-solid fa-ticket"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'><Link to='/DashboardUser'>Rechargement <i class="fa-solid fa-wallet"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenuP'><Link to='/Parametre'>Paramètre <i class=" fa fa-thin fa-gear"></i></Link></p>
                    </div>

                    <div className="signOut">
                        <p className='pSignOut'>Déconnexion <i class="fa-solid fa-right-from-bracket"></i></p>
                    </div>
                </div>
            </div>


            <div className="informationUsers">
                <div className="personnelle">
                    <h1>Informations Personnelles</h1>
                    <div className="border1"></div>
                    <p className="infoNom" id='userInfo'>Nom :  {userInfo.nom}</p>
                    <p className="infoMail" id='userInfo'>Email :  {userInfo.email}</p>
                    <p className='infoMdp' id='userInfo'>Mot de passe :  {userInfo.password}</p>

                    <div className="modifier">Modifier</div>
                </div>

                <div className="supplementaire">
                    <h1>Information supplementaire</h1>
                    <div className="border3"></div>
                    <p className='infoDate' id='userInfo'>Date inscription : {userInfo.date}</p>
                    <p className="sexe" id='userInfo'>Sexe : {userInfo.sexe}</p>
                    <p className="contact" id='userInfo'>Contact : {userInfo.contact}</p>
                </div>

                    <button  className="supprimerCompte"> Supprimer compte</button>
                
            </div>
        </>
    );
}

export default Parametre;