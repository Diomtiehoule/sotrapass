import React, { useState , useEffect } from 'react';
import './css/DashboardUser.css'
import { getDocs , userCollection , updateDoc , doc, db } from '../assets/DB/firebase';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';

function DashboardUser() {

   // recuperer les document de notre  collections pour pouvoir les afficher 
   const [userInfo , setUserInfo] = useState({})
   const [ montant , setMontant] = useState(0);
   const [ numero , setNumero] = useState(0);
   
  let { id } = useParams();
  console.log('ID:', id);

 async function updateUser(e){
  e.preventDefault();
  let date = Date()
  console.log(date)
    console.log('ca marche')
    const docUser = doc(db , 'users' , id);
    const newfield = {compte : userInfo.compte + Number(montant)};
    await updateDoc(docUser , newfield);
    swal("Rechargement !", `Vous avez rechargé votre compte de  ${montant}Frcs,
    le ${date},
    via le numero ( +225 ${numero}).
    Votre solde est maintenant de ${userInfo.compte + Number(montant)}Frcs.`, "success");
  }

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
                <Link to="/"><h1 className='nameSotra'>MaSotra</h1></Link>
            </div>

            <div className="barreLaterale">
                <div className="userProfile">
                    <div className="photoProfile">

                    </div>
                    <div className="nameUser">
                        <p>{userInfo.nom}</p>
                    </div>
                </div>

                <div className="allMenu">
                    <div className="menu">
                        <p className='pMenu'><Link to={`/Ticket/${id}`}>Se déplacer <i class="fa-sharp fa-solid fa-ticket"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenuP'><Link to={`/DasboardUser/${id}`}>Rechargement <i class="fa-solid fa-wallet"></i></Link></p>
                    </div>
                    <div className="menu">
                    <Link to={`/Parametre/${id}`}><p className='pMenu'>Paramètre <i class=" fa fa-thin fa-gear"></i></p></Link>
                    </div>

                    <div className="signOut">
                        <Link to="/"><p className='pSignOut'>Déconnexion <i class="fa-solid fa-right-from-bracket"></i></p></Link>
                    </div>
                </div>
            </div>

            <div className="rechargement">
                <h3>Recharger votre compte</h3>

                <h4>Matricule client : STRA{userInfo.matricule}</h4>

                <form action="" onSubmit={updateUser}>
                <div className="inputsRechargement">
                    <div className="nomUser">
                    <label htmlFor="">Nom :</label><br />
                    <input type="text"
                    className='nomUser'
                    placeholder='Nom...'
                    required='required' />
                    </div>
                    
                    <div className="prenom">
                    <label htmlFor="">Prenom :</label><br />
                    <input type="text"
                    className='prenom'
                    placeholder='Prenom...'
                    required='required' />
                    </div>
                    
                    <div className="compte">
                    <label htmlFor="">numero de compte :</label><br />
                    <input type="tel"
                    className='tel'
                    placeholder='00-00-00-00-00'
                    onChange={(e)=>{setNumero(e.target.value)}}
                    required='required'
                    maxLength={10} />
                    </div>
                   
                   <div className="number">
                   <label htmlFor="">Montant :</label><br />
                    <input type="number"
                    className='number'
                    placeholder='xxxFRCS'
                    required='required'
                    onChange={(e)=>{
                        setMontant(e.target.value);
                    }}
                     />
                   </div>
                    
                </div>

                <button className='submitRechargement' onclick={updateUser}>Recharger</button>
                </form>
            </div>
            
        </>
    );
}

export default DashboardUser;