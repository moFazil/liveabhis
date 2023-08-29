import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminsTable = () => {
  return (
    <div>
        <h1>AdminTables</h1>
        <Outlet/>
        
    </div>
  )
}

export default AdminsTable;