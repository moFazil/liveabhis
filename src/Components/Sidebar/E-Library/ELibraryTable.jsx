import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import {Link, Outlet} from 'react-router-dom';

const ELibraryTable = () => {
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
      name:"Title",
      selector: row=> row.title,
      sortable:true,
    },
    {
      name:"Category Name",
      selector: row=> row.catName,
      sortable:true,
    },
    {
      name:"Course Name",
      selector: row=> row.courName,
      sortable:true,
    },
    {
      name:"Author Name",
      selector:row=> row.authName,
      sortable:true,
    },
    {
      name:"Actions",
    },
  ]

  const data = [
    {
      id:1,
      title:"Enter Title",
      catName:"Enter Your Category",
      courName:"Enter your Course",
      authName:"Enter Author Name",
    },
    {
      id:2,
      title:"Your Title",
      catName:"Enter Your Category",
      courName:"Enter your Course",
      authName:"Enter Author Name",
    }
  ]
const[records,setRecords]=useState(data);

function handleFilter(event){
  const newData = data.filter(row=>{
    return row.title.toLowerCase().includes(event.target.value.toLowerCase())
  })
  setRecords(newData)
}

  return (
    <div style={{width:'70%',transform:'translateY(50%)',translate:'30%',}} >
      <div className=' text-end'>
      <input type="text" placeholder='Search' className='bg-gray-100 w-64 px-3 p-3 my-5 rounded-md text-sm hover:bg-gray-200 border-none outline-none' onChange={handleFilter}/>
        <button className=' bg-greenbg p-3 px-9 rounded-md mx-2 text-sm text-white hover:bg-yellow'>Search</button>
        <Link to={`/elibrary/form`}><button className='bg-greenbg p-3 px-4 rounded-md mx-2 text-sm text-white hover:bg-yellow'>Add Resource</button></Link>
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

export default ELibraryTable;