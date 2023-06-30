import React, {useEffect, useRef, useState} from 'react';
import './css/register.css';
import {addDoc, auth,createUserWithEmailAndPassword, getDocs, signInWithEmailAndPassword , userCollection, doc} from '../assets/DB/firebase';
import swal from 'sweetalert'
import { Link ,
 } from 'react-router-dom';

// composant comportant le formulaire , l'inscription des utilisateurs et la recuperation dans le firestore (base de données firebase)
function Register() {
    
    // envoyer mes information dans ma base de données firestore

    const [newName , setNewname] = useState('');
    const [newMail , setNewMail] = useState('');
    const [newpassWord , setNewPassword] = useState('')
    const [ newMatricule , setNewMatricule] = useState('');
    const [newCompte , setNewCompte] = useState('');
   

     const signUp = (email , password) => createUserWithEmailAndPassword(auth , email, password);


    console.log(signUp);

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

        // code permettant de generer le matricule de l'utilisateur lors de son inscription
     let matriculeID = ()=>{
        return Number(Math.floor((3 + Math.random())* 0x1000).toString(3).substring(1));
    }
   setNewMatricule(matriculeID);
   console.log(newMatricule);

//    generer unn compte au utilisateur a leur inscription , a 0 par defaut
   let compte = () =>{
      let solde = 0
    return  Number(solde);
   }
   setNewCompte(compte);
   console.log(newCompte);

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
        
            console.log('inscription effectué')

            swal("Success!", "Inscription effectué avec success!", "success");
        } catch (error) {
            console.log(error)
            
        }
    }

     
    const userData = async()=>{
        addDoc(userCollection , {nom : newName , password:newpassWord , email:newMail , matricule : newMatricule , compte : newCompte});
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

    <div className="form-container">
  <p className="title">Enregistrement</p>
  <form ref={formRef}className='form_register' onSubmit={handleForm}>
  <div className="input-group">
      <label for="username">Nom utilisateur</label>
      <input type="text" required className="Username" ref = {addInput}  onChange={(event) =>{setNewname(event.target.value)}} />
    </div>
    <div className="input-group">
      <label for="username">Email</label>
      <input type="email" required className="email" ref = {addInput}  onChange={(event)=>{setNewMail(event.target.value)}} />
    </div>
    <div className="input-group">
      <label for="password">Mot de passe</label>
      <input type="password" required className="password" ref = {addInput}  onChange={(event)=>{setNewPassword(event.target.value)}} />
      <div className="forgot">
        <a rel="noopener noreferrer" href="#">Mot de passe oublié ?</a>
      </div>
    </div>
    <button type="submit" className="btn" onClick={userData}>Enregistrer</button>
  </form>
  <p className="signup">Vous n'avez pas de compte?
    <Link to="/Login" className="">Connexion</Link>
  </p>
</div>

    
        
        </>
    );
}

export default Register;