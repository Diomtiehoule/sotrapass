import Header from "./Header";
import '../Components/css/moreInfo.css'


import React from 'react';
import Footer from "./Footer";

function MoreInfo() {
    return (
        <>
        < Header />
        
          <div className="main-image">
          
          {/* <div className="textAnimation">
            <span className=" text first-text">le transport</span>
            <span className=" text second-text"> urbain de reference</span>
          </div> */}
          <h1>Le transport urbain de référence</h1>

            </div>  

            <section className="informations">

                <div className="a_savoir">
                    <div className="container">
                        Comment sa marche ?
                    </div>

                    <div className="info">
                        <p className="para1"><span>.</span> Avoir un compte Masotra en vous enregistrant avec votre email et un mot de passe</p>
                        <br />
                        <p className="para2"><span>.</span> Recharger votre compte a l’aide de vos compte mobile money</p>
                        <br />
                        <p className="para3"><span>.</span> Rendez vous sur votre profile pour entamer vos achat de ticket</p>
                        <br />
                        <p className="para4"><span>.</span> Renseigner votre matricule , votre nom , la ligne à emprunter et le nombre de ticket puis valider</p>
                        <br />
                        <p className="para5"><span>.</span> Une fois le payement effectué , faite le scanner à votre arrêt de bus pour retirer votre  ticket.</p>
                    </div>
                </div>

                <div className="infoLigne">
                    <div className="containerLigne">NOS LIGNE EXPRESS</div>

                    <div className="listeLigne">

                        <div className="express">

                            <div className="express1">
                            <p className="up">Abobo pk18</p>
                            <div className="num">201</div>
                            <p className="under">Hotel de ville</p>
                            </div>

                            <div className="express2">
                            <p className="up">Gare abobo</p>
                            <div className="num">203</div>
                            <p className="under">Gare sud</p>
                            </div>
                            

                            <div className="express3">
                            <p className="up">Angre djibi</p>
                            <div className="num">205</div>
                            <p className="under">Gare sud</p>
                            </div>


                            <div className="express4">
                            <p className="up">Hotel de ville</p>
                            <div className="num">206</div>
                            <p className="under">Gare koute</p>
                            </div>

                            <div className="express5">
                            <p className="up">Yopougon gandhi</p>
                            <div className="num">209</div>
                            <p className="under">Gare sud</p>
                            </div>
                            

                            <div className="express6">
                            <p className="up">Palmeraie rosier</p>
                            <div className="num">210</div>
                            <p className="under">Gare sud</p>
                            </div>

                            <div className="express7">
                            <p className="up">Gonzaqueville</p>
                            <div className="num">211</div>
                            <p className="under">cite administrative</p>
                            </div>

                            <div className="express8">
                            <p className="up">Niangon sud</p>
                            <div className="num">212</div>
                            <p className="under">Gare sud</p>
                            </div>
                        </div>
                        

                        
                    </div>

                    <div className="containerLigne">NOS LIGNE MONBUS</div>

<div className="listeLigne">

    <div className="monbus">

        <div className="monbus1">
        <p className="up">Abobo pk18</p>
        <div className="num">201</div>
        <p className="under">Hotel de ville</p>
        </div>

        <div className="monbus2">
        <p className="up">Gare abobo</p>
        <div className="num">203</div>
        <p className="under">Gare sud</p>
        </div>
        

        <div className="monbus3">
        <p className="up">Angre djibi</p>
        <div className="num">205</div>
        <p className="under">Gare sud</p>
        </div>


        <div className="monbus4">
        <p className="up">Hotel de ville</p>
        <div className="num">206</div>
        <p className="under">Gare koute</p>
        </div>

        <div className="monbus5">
        <p className="up">Yopougon gandhi</p>
        <div className="num">209</div>
        <p className="under">Gare sud</p>
        </div>
        

        <div className="monbus6">
        <p className="up">Palmeraie rosier</p>
        <div className="num">210</div>
        <p className="under">Gare sud</p>
        </div>

        <div className="monbus7">
        <p className="up">Gonzaqueville</p>
        <div className="num">211</div>
        <p className="under">cite administrative</p>
        </div>

        <div className="monbus8">
        <p className="up">Niangon sud</p>
        <div className="num">212</div>
        <p className="under">Gare sud</p>
        </div>

        <div className="monbus9">
        <p className="up">Niangon sud</p>
        <div className="num">212</div>
        <p className="under">Gare sud</p>
        </div>

        <div className="monbus10">
        <p className="up">Niangon sud</p>
        <div className="num">212</div>
        <p className="under">Gare sud</p>
        </div>

        <div className="monbus11">
        <p className="up">Niangon sud</p>
        <div className="num">212</div>
        <p className="under">Gare sud</p>
        </div>

        <div className="monbus12">
        <p className="up">Niangon sud</p>
        <div className="num">212</div>
        <p className="under">Gare sud</p>
        </div>
    </div>
    </div>
                </div>

                <div className="service">

                    <div className="associe">Ligne associé aux service Masotra</div>

                    <div className="passes">
                        <div className="passe">Monbus</div>
                        <div className="passe">Express</div>
                        <div className="passe">Navette</div>
                        <div className="passe">Wibus</div>
                        <div className="passe">Monbato</div>
                    </div>
                </div>
            </section>
            < Footer />
        </>
    );
}

export default MoreInfo;