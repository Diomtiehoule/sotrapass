import React from 'react';
import './css/ticket.css'
import { Link } from 'react-router-dom';

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
                        <p className='pMenuP'><Link to='/ticket'>Se déplacer <i class="fa-sharp fa-solid fa-ticket"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'><Link to='/DashboardUser'>Rechargement <i class="fa-solid fa-wallet"></i></Link></p>
                    </div>
                    <div className="menu">
                        <p className='pMenu'><Link to="/Parametre">Paramètre <i class=" fa fa-thin fa-gear"></i></Link></p>
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