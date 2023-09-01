import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import DataTable from 'react-data-table-component';


const AdminsTable = () => {

  const customStyle={
    headRow:{
      style:{
        backgroundColor:'#105D50',
        color:'#fff', 
      }
    },
  }

  const columns = [
    {
      name:"Name",
      selector: row=> row.name,
      sortable:true,
    },
    {
      name:"Email ID",
      selector: row=> row.email,
      sortable:true,
    },
    {
      name:"Mobile Number",
      selector: row=> row.mobileNo,
      sortable:true,
    },
    {
      name:"Status",
      selector: row=> row.status,
      sortable:true,
      
    },
    {
      name:"Actions",
      selector: row=> row.actions,
      sortable:true,
      
    },
  ]

  const data = [
    {
      id:1,
      name:"YourName",
      email:"Mail Id",
      mobileNo:908263892,
      status:ststoggle()
    },
    {
      id:2,
      name:"Your Name",
      email:"Mail Id",
      mobileNo:908263892,
      status:ststoggle()
    }
  ]
const[records,setRecords]=useState(data);

function handleFilter(event){
  const newData = data.filter(row=>{
    return row.name.toLowerCase().includes(event.target.value.toLowerCase())
  })
  setRecords(newData)
}

function ststoggle() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"></div>
    </label>
  );
}

  return (
    <div style={{width:'70%',transform:'translateY(15%)',translate:'30%',}} >
      <div className=' text-end'>
      <input type="text" placeholder='Search' className='bg-gray-100 w-64 px-3 p-3 my-5 rounded-md text-sm hover:bg-gray-200 border-none outline-none' onChange={handleFilter}/>
        <button className=' bg-greenbg p-3 px-9 rounded-md mx-2 text-sm text-white hover:bg-yellow'>Search</button>
        <Link to={`/admins/form`}><button className='bg-greenbg p-3 px-4 rounded-md mx-2 text-sm text-white hover:bg-yellow'>Add Admin</button></Link>
        </div> 
      <div  className=''>
       <DataTable
       columns={columns}
       data={records}
       selectableRows
       fixedHeader
       pagination
       customStyles={customStyle}
      />
       </div>

        <Outlet/>
        
    </div>
  )
}

export default AdminsTable;