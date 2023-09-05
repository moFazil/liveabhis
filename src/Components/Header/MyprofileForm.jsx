import React from 'react'
import { Outlet } from 'react-router-dom';

const MyprofileForm = () => {
  return (
    <div className='absolute left-[54%] translate-x-[-50%] translate-y-[20%] rounded-lg'>
        
    <input type="file" name="pfp" accept="image/*" className='rounded-full my-3 h-36 w-36 text-transparent bg-transparent bg-opacity-0 object-none border-greenbg border-2 cursor-pointer' />

    <form>  
    <div className='grid grid-cols-2'>
    
      <input type="text" placeholder='Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="email" placeholder='Email id' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-5 rounded-md'/>
      <input type="tel" placeholder='Mobile number' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Theme Color' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-5 rounded-md'/>

      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Reset Password</button> 
      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-5 rounded-md border-none outline-none hover:bg-yellow'>Change Banner</button> 

      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-2 translate-x-[50%] rounded-md border-none outline-none hover:bg-yellow'>Saved</button> 

      </div>

    </form>   

  <Outlet/>

    </div>
  )
}

export default MyprofileForm