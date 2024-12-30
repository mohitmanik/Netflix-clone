// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv'; 
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection} from 'firebase/firestore'
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
const firebaseConfig = {
 apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "netfilx-learn.firebaseapp.com",
  projectId: "netfilx-learn",
  storageBucket: "netfilx-learn.firebasestorage.app",
  messagingSenderId: "63630904515",
  appId: "1:63630904515:web:b4cffd515c11d353df6676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app); 


const signup = async (name,email,password)=>{
   try{
     const res =  await createUserWithEmailAndPassword(auth,email,password);
     toast("Accoun created successfully"); 
     const user = res.user;
     await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
     }) ; 
   }
   catch(error){
        console.log(error); 
        toast.error(error); 
   }
}

const login = async(email,password)=>{
    try{
    await signInWithEmailAndPassword(auth,email,password); 
    toast("signin successful"); 
    }catch(error){
      console.log(error); 
      toast.error(error); 
    }
}

const logout =()=>{
    signOut(auth); 
}
// console.log(import.meta.VITE_API_KEY); 

export {auth,db,login,signup,logout}; 