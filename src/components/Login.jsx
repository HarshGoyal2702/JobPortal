import React from 'react'
import { GoogleAuthProvider,signInWithPopup} from "firebase/auth";

import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleLogin=()=>{
        signInWithPopup(auth,googleProvider).then((result) => {
            const user = result.user;
          }).catch((error) => {
            const errorMessage = error.message;

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
  return (
    <div className='h-screen w-full flex items-center justify-center'>
    <div className='card w-52 h-64 shadow-sm flex flex-col gap-10 items-center justify-center'>
    <h1 className='font-bold text-blue text-2xl'>Login</h1>
    <button className="bg-blue px-8 py-2 text-white" onClick={handleLogin}>Login</button>
    </div>
    </div>
  )
}

export default Login
