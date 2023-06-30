import React, { useState ,  useRef, useContext } from 'react';
import {auth, signInWithEmailAndPassword, userCollection,getDocs} from '../assets/DB/firebase';
import { Link, useNavigate} from 'react-router-dom';
import './css/login.css'
import swal from 'sweetalert';


// composant comportant le formulaire et la connexion des utilisateurs
function Login() {
    const navigate = useNavigate()
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
      });
      const { email, password} = formLogin;
      const [redirectWithId, setRedirectWithId] = useState("");

      const handleChange = (e) => {
        setFormLogin({
          ...formLogin,
          [e.target.name]: e.target.value
        });
      };

      const handleLogin = async (e) => {
        e.preventDefault();
        const userId = await recupereDocumentId(userCollection, formLogin.email, formLogin.password);
    
        signInWithEmailAndPassword(auth, formLogin.email, formLogin.password)
        .then((userCredential) => {
            console.log("Logged in User ID:", userId);
            navigate(`/ticket/${userId}`);
        })
        .catch((e) => {
          swal("Vous n'avez pas de compte , veuillez vous enregistrer pour continuer !")
        });
        
      };

    // const [validation , setValidation] = useState('');

    async function recupereDocumentId(userCollection, email, password) {
        try {
          const querySnapshot = await getDocs(userCollection);
          for (const doc of querySnapshot.docs) {
            const documentData = doc.data();
            const documentId = doc.id;
            if (documentData.email === email && documentData.password === password) {
              console.log(documentId, 'only id');
              return documentId;
            }
          }
          console.log("Aucun document trouvé avec l'email et le mot de passe spécifiés.");
          return null;
        } catch (error) {
          console.error("Une erreur s'est produite lors de la récupération des documents :", error);
          return null;
        }
      }

    return (
        
        <>
        {/* formulaire de connexion des utilisateurs avec email et mot de passe   */}
<body>
        <div className="form-container">
  <p className="title">Connexion</p>
  <form className="form"  onSubmit={handleLogin}>
    <div className="input-group">
      <label for="username">Email</label>
      <input type="email"  id="username" placeholder=""  name="email" value={email} onChange={handleChange} />
    </div>
    <div className="input-group">
      <label for="password">Mot de passe</label>
      <input type="password" id="password" placeholder="" name="password" value={password} onChange={handleChange} />
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
    );
}

export default Login;