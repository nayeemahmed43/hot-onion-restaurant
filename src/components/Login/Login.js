import React from 'react';
import { useAuth } from './useAuth';



const Login = () => {
    const auth = useAuth();
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname="/";
        })
    }
    console.log(auth);
    return (
        <div>
            <h1>You have to log in first to order food. </h1> 
            
            {auth.user ? <button className="btn btn-danger" onClick={auth.signOut}>Sign out</button> : 
            
                <button onClick={handleSignIn} className="btn btn-success">
                Sign in with Google
            </button>
           }
            
        </div>
    );
};

export default Login;