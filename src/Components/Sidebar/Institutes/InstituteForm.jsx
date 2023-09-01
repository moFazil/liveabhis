import { Card, CardContent, Grid, TextField } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom'

const InstituteForm = () => {
  return (
 
    <div className='absolute left-[54%] translate-x-[-50%] translate-y-[5%] rounded-lg'>
        
    <input type="file" name="pfp" accept="image/*" className='rounded-full my-3 h-36 w-36 text-transparent bg-transparent bg-opacity-0 object-none border-greenbg border-2 cursor-pointer' />

    

    <form>  
    <div className='grid grid-cols-3'>
    
      <input type="text" placeholder='Institute ID' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Institute Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      {/* dropdown goes here*/} <input type="" placeholder='Institute Type' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      <input type="number" placeholder='Landline Number' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Landline Number' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="email" placeholder='Email ID' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="password" placeholder='Password Generator' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Address Line 1' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Address Line 2' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Area' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="number" placeholder='Pin Code' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      {/* dropdown goes here*/} <input type="" placeholder='Institute Type' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      {/* dropdown goes here*/} <input type="" placeholder='Institute Type' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      <input type="text" placeholder='District' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      {/* add button goes here */} <input type="text" placeholder='Point of Contact Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      {/* add button goes here */} <input type="text" placeholder='Point of Contact Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      {/* add button goes here */} <input type="text" placeholder='Point of Contact Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      {/* add button goes here */} <input type="text" placeholder='Point of Contact Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

        
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5BC236]"></div>
      </label>



      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Reset</button> 
      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-5 rounded-md border-none outline-none hover:bg-yellow'>Submit</button> 
      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-2 translate-x-[50%] rounded-md border-none outline-none hover:bg-yellow'>Submit Add</button> 

      </div>


    </form>
   


  <Outlet/>

    </div>
  )
}


export default InstituteForm;