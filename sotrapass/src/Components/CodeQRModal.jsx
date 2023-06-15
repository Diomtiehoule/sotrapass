import React, { useState } from 'react';
import '../Components/css/codeQR.css'
import '../assets/other/qrcode.min.js';
import code from '../assets/other/qrcode.min.js';
import QRCode from "react-qr-code";

function CodeQRModal() {

    const QR = (e) =>{
        new QRcode()
    }
    const change =(e) =>{
           
        console.log('sa marche !!')
    }
    const [afficher , setAfficher] = useState(false)
    const [text , setText] = useState('bonjour');

    function Handlechange(e){
        setText(e.target.value) 
    }
    return (
        <div className='container'>
            < code />
            <div>
             <div className='codeQR'>< QRCode value= {text} /></div>
                <p className='alert'></p>
            </div>

            <section className='formulaire'>
                <div className="name">
                <label htmlFor="">Renseigner votre numero de compte</label>
            <input type="text" id='name'/>
                </div>

                <div className="ligne">
                    <label htmlFor="">Vous voyagez avec quelle ligne ?</label>
                    <select name="bus" id="ligneB">
                        <option value="ligneSimple" id='ligneSimple'>Ligne simple</option>
                        <option value="ligneExpress" id='ligneExpress'>Ligne Express</option>
                    </select>
                </div>

                <div className="numBus">
                    <label htmlFor="">Renseigner le nombre de ticket à acheter</label>
                    <input type="text" id='numBus' value={text} onChange={(e)=>{
                        {Handlechange(e
                            
                            
                            
                            )}
                    }}/>
                </div>

                <button className='btn_submit' onClick={change}>Acheter mon ticket</button>
                
            </section>
        </div>
    );
}

export default CodeQRModal