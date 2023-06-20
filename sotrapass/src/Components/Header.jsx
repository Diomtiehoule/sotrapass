import React from 'react';
import './css/header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <body>
        <header>
            <h1>MaSotra</h1>
            <nav>
                <ul>
                <Link to='/MoreInfo'><li>Infos pratique</li></Link>
                < Link to='/Login'><li><i className="fa-regular fa-circle-user"></i> Espace client</li></Link>
                </ul>
            </nav>
        </header>
        </body>
        
            
        </>
    );
}

export default Header;