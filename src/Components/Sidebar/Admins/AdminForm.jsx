import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminForm = () => {
  return (
    <div>
      <form action="">
        <input type="text" />
      </form>

       Name
•        Email ID
•        Password Generator
•        Mobile Number
•        Institutes (toggle)
o        Add 
o        Edit
o        Delete
•        Report Generations (toggle)
o        ON / OFF
        Submit Button 
        Reset Button
        Submit and add Button


        <Outlet/>
    </div>
  )
}

export default AdminForm