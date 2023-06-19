import React, { useState } from 'react';
import '../Components/css/codeQR.css'
import QRCode from "react-qr-code";

function CodeQRModal() {
    const [text , setText] = useState("vous  venez d'acheter votre ticket de bus sotra..");

    function change(e){
        console.log('sa marche')
    }
    return (
        <div className='container'>
            <p className='retour'>Retour</p>
            <div className='codeSpace'>
            <h1>code QR</h1>
             <div className='codeQR'>< QRCode value= {text} /></div>
                <p className='text'>Veuillez faire scanner votre code QR. <br />Puis retirer votre ticket</p>
            </div>
            <button className='terminer' onClick={change}>Terminer</button>
        </div>
    );
}

export default CodeQRModal