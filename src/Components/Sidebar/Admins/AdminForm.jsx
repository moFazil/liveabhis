import React from 'react'
import { Outlet } from 'react-router-dom';     


const AdminForm = () => {
  return (      
    
    <div className=' flex justify-center items-center w-full h-full'>
     <form action="">
    <div className=' grid grid-cols-3 gap-9'>
    <input type="text" placeholder='Name' required className=''/>
    <input type="text" placeholder='Email ID' required/>
    <input type="text" placeholder=' Password Generator'required/>
    <input type="text" placeholder='Mobile Number' required/>
    <div className='border-2 border-greenbg flex justify-between p-3 rounded-lg'> 
    <span className=' text-[10px] mt-1'>Add</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer"/>
        <div className="w-11 h-4 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"></div>
      </label>
      <span className=' text-[10px] mt-1'>Edit</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-4 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"></div>
      </label>
      <span className=' text-[10px] mt-1'>Delete</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-4 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"></div>
      </label>
      
      </div>

    </div>
     </form>
        <Outlet/>
    </div>
  )
}

export default AdminForm