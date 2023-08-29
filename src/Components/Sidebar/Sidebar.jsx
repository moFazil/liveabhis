import React from 'react'
import logo from '../Sidebar/SidebarImages/empty.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=' flex flex-row '>
        <div>
            <img src={logo} alt="Logo" className=' w-40 h-14'/>
            <Link to={`/`}><p>Home</p></Link>
            <Link to={`/institute`}><p>Institutes</p></Link>
            <Link to={`/admins`}><p>Admins</p></Link>
            <Link to={`/reports`}><p>Reports</p></Link>
            <Link to={`/elibrary`}><p>E-Library</p></Link>
            <Link to={`/support`}><p>Support</p></Link>
        </div>
        
    </div>
  )
}

export default Sidebar;