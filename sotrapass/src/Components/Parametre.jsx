import React from 'react';
import './css/Parametre.css'
import { doc , db , deleteDoc} from '../assets/DB/firebase';
import{ Link } from 'react-router-dom';

function Parametre() {

    // function pour supprimer un utilisateur de la base de données
    
    const deleteUser = async (id)=>{
        const userDoc = doc(db , 'users' , id);
        await deleteDoc(userDoc);
    }
    console.log(deleteUser());
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
                        <p>User...</p>
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
                    <p className="infoNom">Nom :</p>
                    <p className="infoMail">Email :</p>
                    <p className='infoMdp'>Mot de passe :</p>

                    <div className="modifier">Modifier</div>
                </div>

                <div className="supplementaire">
                    <h1>Information supplementaire</h1>
                    <div className="border3"></div>
                    <p className='infoDate'>Date inscription :</p>
                    <p className="sexe">Sexe :</p>
                    <p className="contact">Contact :</p>
                </div>

                    <button  className="supprimerCompte" onClick={deleteUser}> Supprimer compte</button>
                
            </div>
        </>
    );
}

export default Parametre;