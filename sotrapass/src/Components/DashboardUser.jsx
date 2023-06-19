import React from 'react';
import './css/DashboardUser.css'

function DashboardUser() {
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
                        <p className='pMenu'>Se déplacer</p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'>Rechargement</p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'>Paramètre</p>
                    </div>

                    <div className="signOut">
                        <p className='pSignOut'>Déconnexion</p>
                    </div>
                </div>
            </div>

            <div className="rechargement">
                <h3>Recharger votre compte</h3>

                <h4>Matricule client : </h4>

                <div className="inputsRechargement">
                    <div className="nomUser">
                    <label htmlFor="">Nom :</label><br />
                    <input type="text"
                    className='nomUser'
                    placeholder='Nom...' />
                    </div>
                    
                    <div className="compte">
                    <label htmlFor="">Numero de compte :</label><br />
                    <input type="tel"
                    className='tel'
                    placeholder='00-00-00-00-00' />
                    </div>
                    
                    <div className="prenom">
                    <label htmlFor="">Prenom :</label><br />
                    <input type="text"
                    className='prenom'
                    placeholder='prenom...' />
                    </div>
                   
                   <div className="number">
                   <label htmlFor="">Montant :</label><br />
                    <input type="number"
                    className='number'
                    placeholder='xxxFRCS' />
                   </div>
                    
                </div>

                <button className='submitRechargement'>Recharger</button>
            </div>
        </>
    );
}

export default DashboardUser;