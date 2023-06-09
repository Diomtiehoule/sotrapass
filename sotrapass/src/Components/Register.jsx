import React, { useState ,  useRef, useContext } from 'react';
import './css/register.css';  
import { addDoc, createUserWithEmailAndPassword, userCollection } from '../assets/DB/firebase';
import { auth } from '../assets/DB/firebase';

// composant comportant le formulaire et l'inscription des utilisateurs
function register() {
    

     const signUp = (email , password) => createUserWithEmailAndPassword(auth , email, password);


    console.log(signUp)

    const inputs = useRef([]);
    const addInput = el =>{
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const formRef = useRef()

    const handleForm = async (e) =>{
        e.preventDefault()
        console.log(inputs)

        if((inputs.current[2].value.length)<6){
            setValidationn('6 caractere min');
            return
        }

        // code permettant de tester l'inscription d'un utilisateur a travers son email et son mot de passe , valider l'innscription ou renvoyer une erreur
        try {
            const cred =await signUp(
                inputs.current[1].value,
                inputs.current[2].value
            )
            formRef.current.reset();

            console.log(cred)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
        {/* Formulaire d'incription des utilisateurs */}
        <body>
        <div className="wrapper">
             <div className="form-box register">
                <div className="icon-close"></div>
                <h1>MaSotra</h1>
            <h2>Enregistrement</h2>
            <form action="#" ref={formRef}className='form_register' onSubmit={handleForm}>
                <div className="input-box">
                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                    <input type="text" required className="Username" ref = {addInput} />
                    <label>Nom d'utilisateur</label>
                </div>
                <div className="input-box">
                    <span className="icon"><i className="fa-sharp fa-solid fa-envelope"></i></span>
                    <input type="email" required className="email" ref = {addInput} />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><i className="fa-sharp fa-solid fa-lock"></i></span>
                    <input type="password" required className="password" ref = {addInput} />
                    <label>Mot de passe</label>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />J'accepte les conditions d'utilisation
                    </label>
                </div>
                <button type="submit" className="btn">Enregistrer</button>
                <div className="login-register">
                    <p> Vous avez deja un compte ?<a href="./Login.jsx" className="login-link">Connexion</a></p>
                </div>
            </form>

           
    </div>
    </div>
        </body>
        
        </>
    );
}

export default register;