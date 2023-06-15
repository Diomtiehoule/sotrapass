import React, { useState ,  useRef, useContext } from 'react';
import { signInWithEmailAndPassword } from '../assets/DB/firebase';
import { auth } from '../assets/DB/firebase';
import { Link , useNavigate
 } from 'react-router-dom';

import './css/login.css'


// composant comportant le formulaire et la connexion des utilisateurs
function Login() {


    const [validation , setValidation] = useState('');
    const signIn = (email , password) => signInWithEmailAndPassword(auth , email, password);

    console.log(signIn);

    const inputs = useRef([]);
    const addInput = el =>{
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const formRef = useRef();

    const handleForm = async (e) =>{
        e.preventDefault()
        console.log(inputs)

        // code permettant de tester la connexion d'un utilisateur a travers son email et son mot de passe , valider l'innscription ou renvoyer une erreur
        try {
            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )
            console.log(cred)
            console.log('vous etes bien connecté !!')
            
        } catch (error){
            console.log('oups, adresse mail ou password incorrect');
            setValidation('Oups, adddresse mail ou mot de passe incorrect')
        }
    }

    return (
        
        <>
        {/* formulaire de connexion des utilisateurs avec email et mot de passe   */}
<body>
<div className="wrapper">
<div className="form-box login">
            <h1>MaSotra</h1>
            <h2>Connexion</h2>
            <form action="#" ref={formRef} onSubmit={handleForm}>
                <div className="input-box">
                    <span className="icon"><i className="fa-sharp fa-solid fa-envelope"></i></span>
                    <input type="email" required id='email' ref = {addInput}/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><i className="fa-sharp fa-solid fa-lock"></i></span>
                    <input type="password" required
                    className="password" ref = {addInput}/>
                    <label>Mot de passe</label>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />Se rappeler de vous
                    </label>
                    <a href="#">Mot de passe oublier?</a>
                </div>
                <button type="submit" className="btn">Connexion</button>
                <div className="login-register">
                    <p>Vous n'avez pas de compte ?
                        
                            <a href="./Register.jsx" className="register-link">S'enregistrer</a></p>
                        
                </div>

            </form>
        </div>
        </div>

        </body>
        </>
        // </Router>
    );
}

export default Login;