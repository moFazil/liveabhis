import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Admins = () => {
  return (
    <div>
      <Link to={`/admins/add`}><button className=' bg-slate-700 text-white'>Add Admins</button></Link>
      Admin

      <Outlet/>
    </div>
  )
}

export default Admins;