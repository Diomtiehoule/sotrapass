import React from 'react';
import './css/ticket.css'

function Ticket() {
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
                        <p className='pMenuP'>Se déplacer <i class="fa-sharp fa-solid fa-ticket"></i></p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'>Rechargement <i class="fa-solid fa-wallet"></i></p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'>Paramètre <i class=" fa fa-thin fa-gear"></i></p>
                    </div>

                    <div className="signOut">
                        <p className='pSignOut'>Déconnexion <i class="fa-solid fa-right-from-bracket"></i></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ticket;