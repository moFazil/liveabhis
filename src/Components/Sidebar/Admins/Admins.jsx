import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Admins = () => {
  return (
    <div className=''>
      <Link to={`/admins/add`}><button className=' bg-slate-700 text-white'>Add Admins</button></Link>
      <p className=''>Admin</p>

      <Outlet/>
    </div>
  )
}

export default Admins;