import React, { useState , useEffect} from 'react';
import '../Components/css/codeQR.css'
import QRCode from "react-qr-code";
import { getDocs , userCollection , doc } from '../assets/DB/firebase';
import { Link , useParams } from 'react-router-dom';

function CodeQRModal() {
    const [text , setText] = useState(`vous  venez d'acheter votre ticket de bus sotra..`);
    const [userInfo , setUserInfo] = useState({})
    let { id } = useParams();
    console.log('ID:', id);

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

    function change(e){
        console.log('sa marche')
    }
    return (
        <div className='container'>
            <p className='retour'>Retour</p>
            <div className='codeSpace'>
            <h1 className='code'>code QR</h1>
             <div className='codeQR'>< QRCode value= {text} /></div>
                <p className='text'>Veuillez faire scanner votre code QR. <br />Puis retirer votre ticket</p>
            </div>
            <button className='terminer' onClick={change} ><Link to={`/ticket/${id}`}>Terminer</Link></button>
        </div>
    );
}

export default CodeQRModal