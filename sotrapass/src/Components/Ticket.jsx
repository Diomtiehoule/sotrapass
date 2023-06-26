import React , {useState , useEffect}from 'react';
import './css/ticket.css'
import { Link , useParams} from 'react-router-dom';
import { getDocs , userCollection } from '../assets/DB/firebase';

function Ticket() {

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
                        <p id='userInfoName'>{userInfo.nom}</p>
                    </div>
                </div>

                <div className="allMenu">
                    <div className="menu">
                        <p className='pMenuP'><Link to='/ticket/:id'>Se déplacer <i class="fa-sharp fa-solid fa-ticket"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'><Link to='/DashboardUser/:id'>Rechargement <i class="fa-solid fa-wallet"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'><Link to="/Parametre/:id">Paramètre <i class=" fa fa-thin fa-gear"></i></Link></p>
                    </div>

                    <div className="signOut">
                        <p className='pSignOut'>Déconnexion <i class="fa-solid fa-right-from-bracket"></i></p>
                    </div>
                </div>
            </div>

            <div className="ticket">
                <h1>ACHTER UN TICKET DE BUS</h1>
                
            </div>
        </>
    );
}

export default Ticket;