import React, {useEffect, useRef, useState} from 'react';
import './css/register.css';
import {addDoc, auth,createUserWithEmailAndPassword, getDocs, signInWithEmailAndPassword , userCollection} from '../assets/DB/firebase';
import swal from 'sweetalert'
import { Link ,
 } from 'react-router-dom';

// composant comportant le formulaire , l'inscription des utilisateurs et la recuperation dans le firestore (base de données firebase)
function Register() {
    
    

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
            swal("Success!", "Inscription effectué avec success!", "success");
        }
    }

    // envoyer mes information dans ma base de données firestore

    const [newName , setNewname] = useState('');
    const [newMail , setNewMail] = useState('');
    const [newpassWord , setNewPassword] = useState('')
    const userData = async()=>{
        addDoc(userCollection , {nom : newName , password:newpassWord , email:newMail});
        console.log(addDoc);
    }
    
     const [users , setUsers] = useState([]);

     useEffect(()=>{
        const getUsers = async () =>{
            const data =  await getDocs(userCollection);
            setUsers(data.docs.map(()=>({...doc.data(), id : doc.id})));
            console.log(data)
        };
        getUsers()
     }, []);
    
    return (
        <>
        {/* Formulaire d'incription des utilisateurs */}

        {/* <div className="wrapper">
             <div className="form-box register">
                <div className="icon-close"></div>
                <h1>MaSotra</h1>
            <h2>Enregistrement</h2>
            <form action="#" ref={formRef}className='form_register' onSubmit={handleForm}>
                <div className="input-box">
                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                    <input type="text" required className="Username" ref = {addInput}  onChange={(event) =>{setNewname(event.target.value)}}/>
                    <label>Nom d'utilisateur</label>
                </div>
                <div className="input-box">
                    <span className="icon"><i className="fa-sharp fa-solid fa-envelope"></i></span>
                    <input type="email" required className="email" ref = {addInput}  onChange={(event)=>{setNewMail(event.target.value)}}/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><i className="fa-sharp fa-solid fa-lock"></i></span>
                    <input type="password" required className="password" ref = {addInput}  onChange={(event)=>{setNewPassword(event.target.value)}}/>
                    <label>Mot de passe</label>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />J'accepte les conditions d'utilisation
                    </label>
                </div>
                <button type="submit" className="btn" onClick={userData}>Enregistrer</button>
                <div className="login-register">
                    <p> Vous avez deja un compte ?<Link to="/Login" className="login-link">Connexion</Link></p>
                </div>
            </form>

           
    </div>
    </div> */}

<div className="form-container">
	<p className="title">Enregistrement</p>
	<form className="form"  ref={formRef} onSubmit={handleForm}>
		<div className="input-group">
			<label for="username">Nom d'utilisateur</label>
			<input type="email" name="username" id="username" placeholder=""  ref = {addInput}/>
		</div>
		<div className="input-group">
			<label for="password">Email</label>
			<input type="password" name="password" id="password" placeholder="" ref = {addInput}/>
            <div className="input-group">
			<label for="username">Mot de passe</label>
			<input type="email" name="username" id="username" placeholder=""  ref = {addInput}/>
		</div>
			<div className="forgot">
				<a rel="noopener noreferrer" href="#">Mot de passe oublié ?</a>
			</div>
		</div>
		<button className="sign">Connexion</button>
	</form>
	<p className="signup">Vous avez déjà un compte?
		<Link to="/Login" className="">Connexion</Link>
	</p>
</div>
        
        </>
    );
}

export default Register;