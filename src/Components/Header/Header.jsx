import React from 'react'
import { FaAngleDown, FaBell, FaComment, FaSignOutAlt, FaUser, FaVideo } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Topbar = () => {
  return (
    <div>
      <div className='flex justify-end mr-11'> 
        <FaVideo className='text-gray-900 text-4xl px-2 mx-3 hover:bg-slate-400 rounded-full cursor-pointer'/>
        <FaBell className='text-gray-900 text-4xl px-2 mx-3 hover:bg-slate-400 rounded-full cursor-pointer'/>
        <FaComment className='text-gray-900 text-4xl px-2 mx-3 hover:bg-slate-400 rounded-full cursor-pointer'/>
        <FaSignOutAlt className='text-gray-900 text-4xl px-2 mx-3 hover:bg-slate-400 rounded-full cursor-pointer'/>

        <select>
      <option disabled selected><FaAngleDown className='text-gray-900 text-4xl px-2 mx-3 hover:bg-slate-400 rounded-full cursor-pointer'/></option>
        <Link to={`form`}><option><FaUser/> My Profile</option></Link>
        </select>
       
      </div>
      
        <Outlet/>
    </div>
  )
}

export default Topbar;