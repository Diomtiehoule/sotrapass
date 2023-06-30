import React , {useState , useEffect}from 'react';
import './css/ticket.css'
import { Link , useParams , useNavigate} from 'react-router-dom';
import { getDocs , updateDoc, userCollection , doc , db} from '../assets/DB/firebase';
import swal from 'sweetalert';

function Ticket() {

  let navigate = useNavigate();
    // recupere l'id de l'utilisateur connecté
    let { id } = useParams();
    console.log('ID:', id);
  
      // recuperer les document de notre  collections pour pouvoir les afficher 
      const [userInfo , setUserInfo] = useState({})
      
  
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

        // fonction pour effectuer le paiement de ticket par l'utilisateur
        const [express , setEpress]  = useState(500);
        const [wibus , setWibus]  = useState(300)
        const [monbus , setMonbus]  = useState(200);
        const [ticket , setTicket]  = useState(0);
        const [choix , setChoix] = useState({
            express : true,
            wibus : true,
            monbus : true
        });
        
      

        function achat(e){


          e.preventDefault();
            // condition d'achat de ticket de bus monbus
            if(choix.monbus === 'monbus' && userInfo.compte < (monbus * ticket)){
              console.log('votre solde est insuffisant');
            }else if(choix.monbus === 'monbus' && userInfo.compte >= (monbus * ticket)){
              const docUser = doc(db , 'users' , id);
              const newfield = {compte : userInfo.compte - (monbus * ticket)};
              updateDoc(docUser , newfield);
              swal(`vous avez été débité de ${monbus * ticket}Frcs , pour l'achat de ${ticket} ticket ${choix.monbus}`)
              navigate(`/codeQRModal/${id}`);
            }


            // condition d'achat de ticket de bus wibus
            if(choix.wibus === 'wibus' && userInfo.compte < (wibus * ticket)){
              console.log('votre solde est insuffisant')
            }else if(choix.wibus === 'wibus' && userInfo.compte >= (wibus * ticket)){
              const docUser = doc(db , 'users' , id);
              const newfield = {compte : userInfo.compte - (wibus * ticket)};
              updateDoc(docUser , newfield);
              swal(`vous avez été débité de ${wibus * ticket}Frcs , pour l'achat de ${ticket} ticket ${choix.wibus}`)
              navigate(`/codeQRModal/${id}`);
            }

            // condition d'achat de ticket de bus express
            if(choix.express === 'express' && userInfo.compte < (express * ticket)){
              console.log('votre  solde est insuffisant')
            }else if(choix.express === 'express' && userInfo.compte >= (express * ticket)){
              const docUser = doc(db , 'users' , id);
              const newfield = {compte : userInfo.compte - (express * ticket)};
              updateDoc(docUser , newfield);
              swal(`vous avez été débité de ${express * ticket}Frcs , pour l'achat de ${ticket} ticket ${choix.express}`)
              navigate(`/codeQRModal/${id}`);
            }
            
        
            }
        

    return (
      
        <>
             <div className='headerDashboard'>
                <Link to='/'><h1 className='nameSotra'>MaSotra</h1></Link>
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
                        <p className='pMenu'><Link to={`/DashboardUser/${id}`}>Rechargement <i class="fa-solid fa-wallet"></i></Link></p>
                    </div>
                    <div className="menu">
                    <Link to={`/Parametre/${id}`}><p className='pMenu'>Paramètre <i class=" fa fa-thin fa-gear"></i></p></Link>
                    </div>

                    <div className="signOut">
                        <Link to='/'><p className='pSignOut'>Déconnexion <i class="fa-solid fa-right-from-bracket"></i></p></Link>
                    </div>
                </div>
            </div>

            <div className="ticket">
                <h1 className='buyTicket'>ACHETER UN TICKET DE BUS</h1>

                <h3>Solde : {userInfo.compte} Frcs</h3>

                <form className="formRechargement">

                    <p className='cardType'>Choisissez le type de ligne a emprunter</p>
                    <div className="wrapper">
  <div className="card">
    <input className="input" type="radio" name="card" value="express"
    onClick={(e)=>{setChoix({express : e.target.value})}} />
    <span className="check"></span>
    <label className="label" >
      <div className="title">EXPRESS</div>
      <div className="price">
        <span className="span">500 Frcs</span>
      </div>
    </label>
  </div>
  <div className="card">
    <input className="input" type="radio" name="card" value="wibus" 
    onClick={(e)=>{setChoix({wibus : e.target.value})}}/>
    <span className="check"></span>
    <label className="label">
      <div className="title">WIBUS</div>
      <div className="price">
        <span className="span">300 Frcs</span>
      </div>
    </label>
  </div>
  <div className="card">
    <input className="input" type="radio" name="card" value="monbus"
    onClick={(e)=>{setChoix({monbus : e.target.value})}} />
    <span className="check"></span>
    <label className="label">
      <div className="title">MONBUS</div>
      <div className="price">
        <span className="span">200 Frcs</span>
      </div>
    </label>
  </div>
</div>

<div className="numb">

    <label htmlFor="" className='numLabel'>Combien de ticket voulez-vous ?</label><br />
    <input type="number"
    name='numberTicket'
    required='required'
    onChange={(e)=>{setTicket(e.target.value)}}
     />
</div>

<button className='btnAcheter' onClick={achat}>Acheter</button>
                    
                </form>
                
            </div>
        </>
      
    );
                  }
  

export default Ticket;