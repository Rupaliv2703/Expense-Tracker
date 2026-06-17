import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdAddCircle } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
    const navigate = useNavigate()
    useEffect(() => {if (window.innerWidth > 768){

  gsap.from(".sidebar", {
    x: -100,
    opacity: 0,
    duration: 1,
    
  });}

}, []);

useEffect(() => {if (window.innerWidth > 768){

  gsap.from(".sideicon", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger:0.5 ,
    delay:1
    
  });}

}, []);

  return (
    
   
      <div className='sidebar flex justify-between p-2 rounded-xl bg-gradient-to-b from-slate-200 via-slate-100  to-gray-400 border-t border-slate-200 fixed bottom-0 left-0 right-0 shadow 
      md:top-0   md:gap-7 md:py-6 md:pt-5 md:flex-col md:w-10 md:left-0 md:min-h-screen
      '>

     <div  onClick={()=>{
         navigate('/home')
     }}
     className='sideicon text-xl text-slate-600 cursor-pointer active:hover:text-indigo-700 gap-10'> <IoMdHome />
</div>
    <div onClick={()=>{
         navigate('/analytics')
     }}
     className='sideicon text-xl text-slate-600 cursor-pointer active:hover:text-indigo-700'>  <SiGoogleanalytics />  </div>
    <div onClick={()=>{
         navigate('/add')
     }}
    className='sideicon text-xl text-slate-600 cursor-pointer active:hover:text-indigo-700 '>  <IoMdAddCircle />  </div>
    <div onClick={()=>{
         navigate('/history')
     }}
     className='sideicon text-xl text-slate-600 cursor-pointer active:hover:text-indigo-700'> <FaHistory />  </div>
    <div onClick={()=>{
         navigate('/setting')
     }}
    className='sideicon text-xl text-slate-600 cursor-pointer active:hover:text-indigo-700'>  <IoSettingsSharp />  </div> 
 
    </div>
    
  )
}

export default Navbar
