import React from 'react'
import { Outlet } from 'react-router-dom';

const InstituteTable = () => {
  return (
    <div>
        <h1>InstituteTable</h1>
    <Outlet/>
    </div>
  )
}

export default InstituteTable;