import React from 'react'
import Add from './components/Add';
import Analytics from './components/Analytics';
import History from './components/History';
import Setting from './components/Setting';
import Notification from './components/Notification';
import Home from './components/Home';
import { FaHome } from "react-icons/fa";
import Landingpage from './components/Landingpage';
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/Notfound';
import Signup from './components/Signup';

const App = () => {
  return (

      
  

    <div className='min-h-screen bg-gray-50 text-gray-900  p-2' >
      
    {/* ROUTER */}
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
         <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<Notfound/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='history' element={<Home/>} />
        <Route path='/setting' element={<Setting/>} />
         <Route path='/notification' element={<Notification/>} />
         <Route path='/history' element={<History/>} />
        </Routes> 
   
    
   
    
   
   
   </div>
  
  ) 
} 

export default App
