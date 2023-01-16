'use client'
import styles from './buttonLogin.module.css'
import { getAuth } from 'firebase/auth';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from './firebase';
import { useState } from 'react';

export default function ButtonLogin({text, image, color}) {

const [login, setLogin] = useState(false)
const [state, setState] = useState('')

const Login = async () => {
  setLogin(!login)
  
  if(login === false) {
   SignIn()
  setState('El usuario se a logiado correctamente')
  }else if(login === true) {
    setState('')
  }
}

const SignOut = () => {
  auth.signOut()
}

const SignIn = () => {

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(result)
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });  
}

  return (
    <>
          <p>{state}</p>
    <button onClick={Login} style={{backgroundColor: color}} className={styles.button}><img height={20} width={20} src={image} alt="" /></button>
    </>

  )
}