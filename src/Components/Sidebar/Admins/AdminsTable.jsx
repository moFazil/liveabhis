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
    },
    {
      name:"Actions",
    },
  ]

  const data = [
    {
      id:1,
      name:"YourName",
      email:"Mail Id",
      mobileNo:908263892,
    },
    {
      id:2,
      name:"Your Name",
      email:"Mail Id",
      mobileNo:908263892,
    }
  ]
const[records,setRecords]=useState(data);

function handleFilter(event){
  const newData = data.filter(row=>{
    return row.name.toLowerCase().includes(event.target.value.toLowerCase())
  })
  setRecords(newData)
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