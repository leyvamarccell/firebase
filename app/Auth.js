import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithEmailLink } from "firebase/auth";
import {auth} from './firebase'
import { addUsers } from "./Database.js"
import { toast} from "react-hot-toast";

export let state
export let userPhoto
export let userName
export let userEmail

auth.onAuthStateChanged(user => {
    if(user) {
        state = true
        userName = user.displayName
        userPhoto = user.photoURL
        userEmail = user.email
    }else {
        state = false
    }
})

export const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
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

let a = 'A'
export const CreateUserWithEmailAndPassword = () => {
  if(password !== passwordCheck) {
    toast.error('Las contraseñas no coinciden')
  }
  else {
    createUserWithEmailAndPassword(auth, '', '')
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential)
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  
  
}

export const SignInWithEmail= () => {
  signInWithEmailAndPassword(auth, '', '')
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
}

export const SignOut = () => {
    auth.signOut()
}

export const SignInWithLink = () => {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

  sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });  
}