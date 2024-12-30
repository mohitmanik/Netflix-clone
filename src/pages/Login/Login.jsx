import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import {login,signup} from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import netflix_spinner from "../../assets/netflix_spinner.gif"
import { use } from 'react'
const Login = () => {
    
 const [signState , setSignState] = useState("Sign In"); 
 const [name,setName] = useState(""); 
 const [email,setemail] = useState(""); 
 const [password,setpassword] = useState(""); 
 const[loading , setloading] = useState(false); 
 const navigate = useNavigate(); 
 const user_auth = async (e)=>{
     e.preventDefault(); 
     setloading(true); 
  if(signState==='Sign In'){
   await login(email,password);
   navigate("/"); 
  }else{
    await signup(name,email,password); 
  }
    setloading(false); 

 }
  return (


    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
     
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form > 

          {signState==="Sign Up"? <input type="text" placeholder='Your name' value={name} onChange={(e)=>setName(e.target.value)} />:<></>}
          <input type="email" placeholder='Email'  value={email} onChange={(e)=>setemail(e.target.value)} />
          <input type="password" placeholder='Password'  value={password} onChange={(e)=>setpassword(e.target.value)} />
          <button onClick={user_auth} type='submit'> {signState}</button>
         <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help ?</p>
         </div>
        </form>

        <div className="form-switch">

        { signState=="Sign In"? <p>New to Netflix ? <span onClick={()=>{
setSignState("Sign Up")
        }}>Sign Up Now </span ></p>: <p>Aleardy have account ? <span onClick={()=>{
          setSignState("Sign In")
                  }}>
          Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login; 
