import React from 'react'
import Add from './Add'
import Analytics from './analytics';
import History from './History';
import Setting from './Setting';
import Notification from './Notification';
import Navbar from './Navbar';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
const navigate= useNavigate()

// #GSAP

useEffect(() => {
   if (window.innerWidth > 768){
    gsap.from(".card",{
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
     
    });}
  }, []);

  useEffect(() => {
     if (window.innerWidth > 768){
  gsap.from(".item", {
    x: -40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
  }); }
}, []);


  return (
    
      <div className='min-h-screen bg-slate-50 from-slate-50 to-indigo-50   text-gray-900 ">  p-2 md:ml-15 ' >

       {/* HEADER */}

    <div className='flex justify-between items-center' >
     <div >
    <h1 className='font-bold font-serif text-4xl'> Expense Tracker</h1>
    <p className='text-gray-500 '> Track Your Daily Spending 💰</p>
   </div>
   <div>
    <p className='text-2xl mt-6'> <Notification/> </p>
   </div>
    </div> 

 {/*BALANCEBOX */}

 <div class="bg-slate-50  md:mx-auto md:max-w-4xl p-6 rounded-2xl text-slate-900">
 
<div className=' card bg-gradient-to-b from-cyan-200 via-sky-300 to-purple-300 rounded-xl mt-7 flex flex-col justify-center items-center gap-2 shadow p-5 ' >

 <h4 className='text-slate-500 '> Total Balance</h4>
 <h1 className='text-5xl text-gray-600 font-bold '> RS,25000</h1>
 </div>



<div className='flex justify-between  mt-7'>

<div className='card  px-8 bg-gradient-to-b from-green-600 via-emerald-300 to-green-600  p-5 rounded-2xl flex flex-col justify-center items-center shadow
  md:px-20 '>
<h3 className='text-slate-700  '> Income</h3>
   <p className='font-semibold text-4xl  '>30,000</p>
  </div>

<div  className=' card px-8 bg-gradient-to-b from-red-500 via-rose-300 to-red-600 p-5 rounded-2xl flex flex-col justify-center items-center shadow
   md:px-20    '>
 <h3 className='text-slate-700 '> Expense</h3>
  <p className='font-semibold text-4xl '> 20,000</p>
</div>
 </div>

<div className=' card flex justify-center mt-4  '>
  <button className='w-1/2 bg-gradient-to-r from-blue-400 via-indigo-500  to-purple-300 mt-2 rounded-xl hover:cursor-pointer 
     md:w-1/3 md:border-none md:p-1'>+ Add </button>
</div>


 {/* MIDDLE PART */}

  <div >

  <div  className=' card flex justify-between mt-4'>

<div className='text-2xl font-bold '>
    <h2> Recent Expenses</h2>
    </div>

<div className='text-blue-400 hover:cursor-pointer'> 
  <p >See All </p>
  </div>
</div>

{/* Example */}
<div className=' item bg-stone-50  mt-4 shadow  p-3 rounded-2xl
  md:px-5 md:hover:scale-110   '>
 <div className='flex justify-between'>
  <div className='font-semibold text-xl'> Burger</div>
  <div className='font-bold text-2xl '>Rs. 250</div>
 </div>
 <div className='text-slate-500 text-sm'> 29/11/2026</div>
 </div>
<div className='item bg-stone-50 mt-4 shadow hover:scale-110 p-3 rounded-2xl
  md:px-5    '>
 <div className='flex justify-between'>
  <div className='font-semibold text-xl'> makeup</div>
  <div className='font-bold text-2xl '>Rs. 1250</div>
 </div>
 <div className='text-slate-500 text-sm'> 07/11/2026</div>
 </div>

 </div>
</div> 
   
   
    <Navbar/>
  
   
   
   </div>
   
    
  )
}

export default Home
