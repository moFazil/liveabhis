import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Support = () => {
  return (
    <div> 
      Support
      <Link to={`/support/add`}><button className=' bg-slate-700 text-white'>Add support</button></Link>
      <Outlet/>
    </div>
  )
}

export default Support;