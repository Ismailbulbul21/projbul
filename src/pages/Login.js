import React from 'react'
import  { useState } from 'react'
import { signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../Firebase"
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const[email, setEmail]=useState('')
  const[password , setPassword]=useState('')
const navigate =useNavigate()
  const signUp=(e)=>{
  
    e.preventDefault();
    signInWithEmailAndPassword(auth , email ,password).then((userCredential)=>{
    
navigate('dashboard')
    
    console.log(userCredential)
    
    }).catch((error)=>{
    
      console.log(error)
    })
    
    }
  return (
<div className=' absolute top-0 flex justify-center items-center h-full w-full flex-col text-center'>
      
      <form onSubmit={signUp} className=' flex flex-col gap-8'>
<h1 className=' text-2xl text-white tracking-widest'> Login here if you already have account</h1>
<input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className=' outline-none p-5 lg:px-32 px-12 rounded-lg'  placeholder='Email' />

<input className=' outline-none p-4 lg:px-32 px-12 rounded-lg' placeholder='password'value={password} type='password' onChange={(e)=>setPassword(e.target.value)}  />

<button className=' bg-indigo-600 text-lg text-white p-2 rounded-md' type='submit'>Loginn</button>

</form>


<h1 className=' mt-7 text-2xl tracking-widest text-indigo-300'>You dont have Account <Link to='signup' className=' text-white border-b-2 text-lg'>SignUp</Link> Here</h1>

    </div>
  )
}

export default Login