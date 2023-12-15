import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUSer] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUSer(currentUser);
      console.log("CurrentUser", currentUser);
      setLoading(false);
      if(currentUser && currentUser.email){
        const loggedUser = {
            email: currentUser.email
          }
        fetch('http://localhost:5000/jwt',{
            method:'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loggedUser),
          })
          .then(res=>res.json())
          .then(data=>{
            console.log('jwt response',data)
            // local storage is not the best solution but second best solution
            localStorage.setItem('car-access-token',data.token)
          })
      }
      else{
        localStorage.removeItem('car-access-token')
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    SignIn,
    logOut,
    GoogleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
