import React from 'react'
import { Outlet } from 'react-router-dom';

const ReportsTable = () => {
  return (
    <div>
        <h1>ReportsTable</h1>

    <Outlet/>
    </div>
  )
}

export default ReportsTable;