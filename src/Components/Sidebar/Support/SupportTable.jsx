import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import { Outlet } from 'react-router-dom'

const SupportTable = () => {

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
            name:"Serial Number",
            selector: row => row.serialnumber
        },
        {
            name:"Date",
            selector: row => row.date
        },
        {
            name:"Id",
            selector: row => row.id
        },
        {
            name:"Name",
            selector: row => row.name
        },
        {
            name:"Point of Contact",
            selector: row => row.pointofcontact
        },
        {
            name:"Mobile Number",
            selector: row => row.mobilenumber
        },
        {
            name:"Subject",
            selector: row => row.subject
        },
        {
            name:"Priority",
            selector: row => row.priority
        },
        {
            name:"Status",
            selector: row => row.status
        },
        {
            name:"Chat",
            selector: row => row.chat
        },

    ]

    const data = [

        {
        	serialnumber : 1,
        	date : "enter date",
        	id : 1234,
        	name : "your name",
        	pointofcontact : "point of contact name",
        	mobilenumber : 9856487965,
        	subject : "subject",
        	priority : "enter ur priority",
        	status : ststoggle(),
        	chat : "",
        },
        {
        	serialnumber : 2,
        	date : "enter date",
        	id : 1235,
        	name : "your name",
        	pointofcontact : "point of contact name",
        	mobilenumber : 9856487965,
        	subject : "subject",
        	priority : "enter ur priority",
        	status : ststoggle(),
        	chat : "",
        },
        
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

    <div style={{width:'75%',transform:'translateY(15%)',translate:'25%'}}>
        
        <div className='overflow-x-auto max-w-full'> 
        <div className=' text-end'>
        <input type="text" placeholder='Search Name' className='bg-gray-100 w-64 px-3 p-3 my-5 border-none outline-none rounded-md text-sm hover:bg-gray-200' onChange={handleFilter}/>
        <button className=' bg-greenbg p-3 px-9 rounded-md mx-2 text-sm text-white hover:bg-yellow'>Search</button>
        </div>

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

export default SupportTable