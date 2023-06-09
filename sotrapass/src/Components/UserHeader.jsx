import React from 'react';
import './css/userHeader.css'

function UserHeader() {
    return (
        <>
        <body>
        <header>
                <h1>MaSotra</h1>
                <nav>
                    <ul>
                        <li>Se déplacer</li>
                        <li>Historique</li>
                        <li><i className="fa-regular fa-circle-user"></i>....</li>
                    </ul>
                </nav>
            </header>
        </body>
            
        </>
    );
}

export default UserHeader;