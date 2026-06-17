import React from 'react'
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  
    const navigate= useNavigate();
  const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [fullname, setfullname] = useState('')
  // FORM
    const submithandler=(e)=>{
      e.preventDefault();
     if(fullname.trim() === ""){
  alert("Please enter your name");
  return ;
}
 if (!email.endsWith(".com")) {
      alert("Please enter a valid email ending with .com");
      return;
    }
  
    alert("Account Created Successfully ");
     navigate('/home')
     setfullname('')
      setemail('')
      setpassword('')
      console.log('full name is',fullname);
      console.log('email is',email);
       console.log('password is',password);
    }
  
    return (
      // HEADER
      <div className='min-h-screen md:flex md:flex-col text-black bg-white p-2'>
      <div  >
      <h1 className='font-bold font-serif text-3xl'> Expense Tracker</h1>
      <p className='text-gray-400'> Track Your Daily Spending</p>
     </div>
  
      {/* BOX */}
      <div className=' md:flex-1 md:flex  md:h-screen md:bg-blue-200 shadow rounded-2xl md:mt-4 md:p-4'>
     {/* LEFT SIDE */}
     <div className='hidden md:flex md:justify-evenly md:flex-col md:block md:w-1/2 text-white p-5'>
       <div>
        <h1 className='text-3xl font-bold'> 
        Take Control OF Your Finances.
        </h1>
        </div>
         
       <div className='mt-2'>
        <h3 className='text-2xl   font-semibold'>
           Track expenses,analyze spending ,
           </h3>
      <h3 className='text-2xl   font-semibold'
      > and manage your budget effortlesssly </h3>
      </div> 
      
      <div className=' mt-2 '>
        <p className='text-lg '>
         Easy Expense Tracking</p>
      <p className='text-lg mt-1'>
         Spending Analytic</p>
      <p className='text-lg mt-1'>
         Smart Budget Management</p>
    </div>
     </div>
  
  
  
       {/* RIGHT SIDE */}
  
  <div className='w-full  md:w-1/2  rounded-2xl p-4 bg-gray-200 mt-7 shadow'>
     <div className='flex justify-center text-5xl text-gray-300'>
      <CgProfile />
     </div>
    <h2 className='text-center text-3xl font-bold'>
       Create Your Account
       </h2>
  
       <form onSubmit={(e)=>{
          submithandler(e)
        }} >

         <div className='mt-3'>
      <h3 className='font-semibold '>
        Full Name
        </h3>
         
      <input onChange={(e)=>{
        setfullname(e.target.value)
      }} className='border  mt-2 w-[90%] shadow rounded-2xl p-2'
       type='text' value={fullname} placeholder='Enter your name'  />
  
    </div>   
    <div className='mt-3'>
      <h3 className='font-semibold '>
        Email
        </h3>
         
      <input onChange={(e)=>{
        setemail(e.target.value)
      }} className='border  mt-2 w-[90%] shadow rounded-2xl p-2'
       type='email' value={email} placeholder='username@gmail.com'  />
  
    </div>
  
   <div className='mt-3' >
      <h3 className='font-semibold '>Password</h3>
     
      <input onChange={(e)=>{
        setpassword(e.target.value)
      }} className='border  mt-2 w-[90%] shadow rounded-2xl p-2'
      type='password'  value={password} placeholder='Password'  />
  
      </div>
  <div className='flex justify-center mt-3'>
    <button type='submit'
    className='w-1/2 active:hover:cursor-pointer bg-red-500 rounded shadow'>
      Sign Up
    </button>
  </div></form>
  <div>
    <p className='text-center  p-3 text-gray-400'>
       OR</p>
  </div>
  <div className='flex justify-center '>
    <button onClick={() => navigate('/home')}
    className='w-1/2 active:hover:cursor-pointer border-1 rounded shadow'>
     Continue with Google
    </button>
  </div>
  <div className='mt-3'>
    <p className='text-gray-500 text-right'>
       Already have an account ?<Link className='text-blue-500'
       to='/'>Signup</Link> </p>
  </div>
  
  </div>
  </div>
   </div>
    )
}

export default Signup

