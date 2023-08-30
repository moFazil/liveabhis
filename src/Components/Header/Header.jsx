import React from 'react'
import { FaAngleDown, FaBell, FaComment, FaSignOutAlt, FaVideo } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Topbar = () => {
  return (
    <div>
      <div className='flex justify-end mr-11 py-2'> 
        <FaVideo className='text-gray-900 text-4xl px-2 mx-3 hover:bg-yellow rounded-full cursor-pointer hover:ease-in-out duration-300'/>
        <FaBell className='text-gray-900 text-4xl px-2 mx-3 hover:bg-yellow rounded-full cursor-pointer hover:ease-in-out duration-300'/>
        <FaComment className='text-gray-900 text-4xl px-2 mx-3 hover:bg-yellow rounded-full cursor-pointer hover:ease-in-out duration-300'/>
        <FaSignOutAlt className='text-gray-900 text-4xl px-2 mx-3 hover:bg-yellow rounded-full cursor-pointer hover:ease-in-out duration-300'/>

        <Link to={`form`}><FaAngleDown className='text-gray-900 text-3xl w-8 mt-1 mx-3 hover:bg-yellow rounded-full cursor-pointer hover:ease-in-out duration-300'/></Link>
       
      </div>
      <p className='w-full bg-green h-[1px]'></p>
      
        <Outlet/>
    </div>
  )
}

export default Topbar;