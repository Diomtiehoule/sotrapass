import Footer from './Footer'
import Header from './Header'
import './css/home.css'
import { Link } from 'react-router-dom'

function Home(){
    return (
    <>
    < Header />
    <img src="../media/main-image.jpg" alt="mon image"  className='main-image'/>

    <h4><i class="fa-solid fa-circle-info"></i> Info</h4>

    <div className="info">
        <p>Votre plateforme de paiment de ticket en ligne est maintenant disponible !</p>
    </div>

    <div className="sytem">
        <img src="../media/distributeur.jpg" alt="" />

        <div className="text">

        <p>La nouvelle bielleterie de la sotra : Rapididté et souplesse</p>

<p>La billettique est un système informatisé d’achat de tickets qui permet de dématérialiser le circuit d’achat des tickets et de le sécuriser par la même occasion.</p>

        </div>
       
    </div>




    < Footer />
    </>
     )
}

export default Home