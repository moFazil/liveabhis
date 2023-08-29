import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Reports = () => {
  return (
    <div>Reports
      <Link to={`/reports/add`}><button className=' bg-slate-700 text-white'>Add Reports</button></Link>

      <Outlet/>
    </div>
  )
}

export default Reports;