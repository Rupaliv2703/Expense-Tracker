import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div className='min-h-screen pb-24 bg-slate-50 text-slate-900 '>
       <h1 className='border-slate-600 rounded-2xl border-b-2  text-4xl font-serif font-bold text-center p-2'
       >Add Expense</h1>
  <div className='p-4 '>    
 {/* AMOUNT */}
 <div className='md:flex md:gap-5 md:justify-between'>
<div className='flex  flex-col gap-2 mt-4 pl-2 pb-2 rounded-2xl bg-gradient-to-b from-blue-300 via-indigo-200  to-purple-300 shadow
 md:w-120       '>
 <div className='text-3xl text-slate-600 font-semibold'> 
  <h2> Amount</h2>
  </div>
  <div className='border-2 border-slate-200 p-2 rounded-xl w-1/2'>
    <input className='w-full outline-none'
     placeholder='Enter Amount' text="number" />
    </div>
</div>

{/* CATEGORY */}
<div className='flex  flex-col gap-2 mt-4 pb-2 pl-2 rounded-2xl bg-gradient-to-b from-blue-300 via-indigo-200  to-purple-300 shadow
  md:w-120 '>
 <div className='text-3xl text-slate-600 font-semibold'> 
  <h2> Category</h2>
  </div>
  <div className='border-2  border-slate-200 p-2 rounded-xl w-1/2'>
   <select  className='w-full'>
  <option value="food">🍔 Food</option>
  <option value="grocery">🛒 Grocery</option>
  <option value="bills">📄 Bills</option>
  <option value="travel">✈️ Travel</option>
  <option value="shopping">🛍️ Shopping</option>
  <option value="medical">🏥 Medical</option>
  <option value="education">📚 Education</option>
  <option value="gift">🎁 Gift</option>
  <option value="rent">🏠 Rent</option>
  <option value="others">📦 Others</option>
</select>
    </div>
</div>
</div>
{/* DATE */}
<div className='md:flex md:gap-5 md:justify-between'>
<div className='flex  flex-col gap-2 mt-4 p-1 pl-2 pb-2 rounded-2xl bg-gradient-to-b from-blue-300 via-indigo-200  to-purple-300 shadow
md:w-120'>
 <div className='text-3xl text-slate-600 font-semibold'> 
  <h2> Date</h2>
  </div>
  <div className='border-2 border-slate-200 p-2 rounded-xl w-1/2'>
    <input className='w-full outline-none'
    placeholder='Enter Amount' text="number" />
    </div>
</div>

{/* NOTE */}
<div className='flex  flex-col gap-2 mt-4 p-1 pl-2 pb-2 rounded-2xl bg-gradient-to-b from-blue-300 via-indigo-200  to-purple-300 shadow
  md:w-120 '>
 <div className='text-3xl text-slate-600 font-semibold'> 
  <h2> Note</h2>
  </div> 
<textarea
className='w-full p-1 border-2 border-slate-200 rounded-2xl resize-none outline-none '
placeholder='Write Note'

 />




  </div>
</div>
{/* BUTTON */}

<div className=' card flex justify-center mt-4  '>
  <button 
  className='w-1/2 bg-gradient-to-b from-slate-300 via-indigo-200  mt-2 rounded-xl hover:cursor-pointer 
     md:w-1/3 md:border-none md:p-1'>+ Add </button>
</div>


</div> 
 
 {/* NAVBAR */}
   <Navbar/>  

    </div>
  )
}

export default Add


