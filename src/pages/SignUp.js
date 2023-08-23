import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../Firebase"
import { useNavigate } from 'react-router-dom'




const SignUp = () => {
  const[email, setEmail]=useState('')
const[password , setPassword]=useState('')
const navigae =useNavigate();

const signUp=(e)=>{

  e.preventDefault();
  createUserWithEmailAndPassword(auth , email ,password).then((userCredential)=>{
  
navigae('/')
  
  //console.log(userCredential)
  
  }).catch((error)=>{
  
    console.log(error)
  })
  
  }



  return (
    <div className=' h-screen bg-gray-800 w-full flex flex-col justify-center items-center'>
      
      <form onSubmit={signUp} className=' flex flex-col gap-7 text-center justify-center items-center' >
<p className=' text-yellow-50 text-3xl mb-7'>You don't Have account ? <span className=' text-red-600'>Create account here</span></p>

<input placeholder='email' className=' p-5 px-32 rounded-lg outline-none' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
<input  placeholder='password' className='p-5 px-32 rounded-lg outline-none' value={password} type='password' onChange={(e)=>setPassword(e.target.value)} />

<button className=' p-3 rounded-lg bg-slate-300 text-black' type='submit'>SignUp</button>

   </form>





    </div>
  )
}

export default SignUp