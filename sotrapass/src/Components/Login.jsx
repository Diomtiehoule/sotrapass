import React, { useState ,  useRef, useContext } from 'react';
import { signInWithEmailAndPassword, userCollection } from '../assets/DB/firebase';
import { auth } from '../assets/DB/firebase';
import { Link, useNavigate
 } from 'react-router-dom';
import './css/login.css'




// composant comportant le formulaire et la connexion des utilisateurs
function Login() {
    const navigate = useNavigate()


    // const [validation , setValidation] = useState('');

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
            );
            console.log(cred)
            console.log('vous etes bien connecté !!')
            console.log(cred.user.uid)
            navigate(`/register/${cred.user.uid}`)
            
        } catch (error){
            console.log('oups, adresse mail ou password incorrect');
            setValidation('Oups, adddresse mail ou mot de passe incorrect')
        }
    }


    return (
        
        <>
        {/* formulaire de connexion des utilisateurs avec email et mot de passe   */}
<body>
        <div className="form-container">
	<p className="title">Connexion</p>
	<form className="form"  ref={formRef} onSubmit={handleForm}>
		<div className="input-group">
			<label for="username">Email</label>
			<input type="email" name="username" id="username" placeholder=""  ref = {addInput}/>
		</div>
		<div className="input-group">
			<label for="password">Mot de passe</label>
			<input type="password" name="password" id="password" placeholder="" ref = {addInput}/>
			<div className="forgot">
				<a rel="noopener noreferrer" href="#">Mot de passe oublié ?</a>
			</div>
		</div>
		<button className="sign">Connexion</button>
	</form>
	<p className="signup">Vous n'avez pas de compte?
		<Link to="/Register" className="">Enregistrer</Link>
	</p>
</div>

        </body>
        </>
        // </Router>
    );
}

export default Login;