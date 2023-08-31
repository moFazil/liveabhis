import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const ELibrary = () => {
  return (
    <div>E-Library
      <Link to={`/elibrary/table`}><button className=' bg-slate-700 text-white'>Add Resource</button></Link>

      <Outlet/>
    </div>
  )
}

export default ELibrary;