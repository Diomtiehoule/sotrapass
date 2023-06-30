import Footer from './Footer'
import Header from './Header'
import './css/home.css'
import logo1 from '../../media/main-image.jpg';
import logo2 from '../../media/distributeur.jpg'
import image from '../../media/guichet.webp'

function Home(){
    return (
    <>
    < Header />
    <img src={logo1} alt="mon image"  className='main-image'/>

    <h4><i class="fa-solid fa-circle-info"></i> Info</h4>

    <div className="infoAppli">
        <p>Votre plateforme de paiment de ticket en ligne est maintenant disponible !</p>
    </div>

    <div className="system">

        <div className="text">

        <p>La nouvelle bielleterie de la sotra : Rapididté et souplesse</p>

<p>La billettique est un système informatisé d’achat de tickets qui permet de dématérialiser le circuit d’achat des tickets et de le sécuriser par la même occasion.</p>

        </div>

        <img src={logo2}  alt="" className='distributeurImage' />

        </div>

        <div className="objectif">
            <h1>A QUOI VOUS SERVIRA CE SYSTEME ?</h1>
            <div className="role1">
                <p>
                    Faciliter vos payement de ticket , partout ou vous allez et a tout moment.
                    <br />
                    <br/>
                Le systeme de paiement a distance vous facilite les souci de portefeuille ainsi eviter  de vous faire voler votre argent ou votre carte par des personnes de mauvaises foi.
                <br />
                <br />
                La SOTRA dans sa quete de satisfaire sa clientèle , met tout en ouvre pour son déplacement dans de bonne conditions
                </p>
            </div>
       
    </div>

    <div className="innovation">
        <h1>L'innovation</h1>
        <div className='innovationSotra'>
            <p>
                L'innovation estau coeur de tout et la sotra vise cela a travers son nouveau systeme de paiement de ticket. Le paiement a distance prendra le pas sur les paiement en physique.
            </p>
        </div>
    </div>

    {/* <div className="newLetter">
      <form className="form">
        <div className="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" required="" />
        </div>
        <div className="form-group">
          <label for="textarea">Laissez nous votre message</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button className="form-submit-btn" type="submit">Soumettre</button>
      </form>
    </div> */}





    < Footer />
    </>
     )
}

export default Home