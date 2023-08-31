import React from 'react'
import { Outlet,Link } from 'react-router-dom';

const Institutes = () => {
  return (
    <div>Institite
     <Link to={`/institute/table`}> <button className=' bg-slate-700 text-white'>Add Institutes</button></Link>
      <Outlet/>
    </div>
  )
}

export default Institutes;