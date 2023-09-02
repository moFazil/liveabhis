import React, { useState } from 'react'
import Select from 'react-select';
import { Outlet } from 'react-router-dom'
import { FaVrCardboard } from 'react-icons/fa';

const InstituteForm = () => {

  const customStyle={
    options:{
      style:{
        backgroundColor:'gray',
        color:'#fff', 
        padding:'5px',
        margin:'3px 2px',
        borderRadius:'5px'
      }
    }
  }

  const [count, setCount] = useState(0);

  const incount = () => {
    setCount(count + 1);
  };

  const decount = () => {
    if (count > 0) {
    setCount(count - 1);
  }
};


  const inputchange = (e) => {

    const newValue = parseInt(e.target.value, 10);

    if (!isNaN(newValue)) {
      setCount(newValue);
    }
  };
  

  const options = [

    { label: 'School' },
    { label: 'College' },
    { label: 'Private Institute' },
  
  ];

  const placeholderText = 'Institute Type';

  return (
 
    <div className='absolute left-[54%] translate-x-[-50%] translate-y-[5%] rounded-lg'>
        
    <input type="file" name="pfp" accept="image/*" className='rounded-full my-3 h-36 w-36 text-transparent bg-transparent bg-opacity-0 object-none border-greenbg border-2 cursor-pointer' />

    <div className='grid grid-cols-3'>
    
      <input type="text" placeholder='Institute ID' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Institute Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      {/* dropdown goes here*/} 
      
      <Select 
        options={options} 
        placeholder={placeholderText}
        style={customStyle}
      />
      

      <input type="text" placeholder='Landline Number' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Landline Number' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="email" placeholder='Email ID' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="password" placeholder='Password Generator' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Address Line 1' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Address Line 2' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Area' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Pin Code' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      {/* dropdown goes here*/} <input type="" placeholder='Country' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      {/* dropdown goes here*/} <input type="" placeholder='State' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      <input type="text" placeholder='District' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>



      <div className='h-10 mt-2 rounded-lg flex justify-around items-center'>

        <p>branches</p>
      
      <button onClick={decount} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={count}
        onChange={inputchange}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incount}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>

      <div className='h-10 mt-2 rounded-lg flex justify-around items-center'>

        <p>students</p>
      
      <button onClick={decount} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={count}
        onChange={inputchange}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />
      
      <button onClick={incount}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>

      </div>

<div className='h-10 mt-2 rounded-lg flex justify-around items-center'>

        <p>faculties</p>
      
      <button onClick={decount} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={count}
        onChange={inputchange}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      
      <button onClick={incount}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>

      
      </div>

      <div className='h-10 mt-2 rounded-lg flex justify-around items-center'>

        <p>cloud</p>
      
      <button onClick={decount} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={count}
        onChange={inputchange}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      
      <button onClick={incount}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>

      
      </div>

        
      <label className="relative inline-flex items-center cursor-pointer justify-around">
      <FaVrCardboard className=' text-3xl '/>
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[17px] after:left-[88px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5BC236]"></div>
      </label>


      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Reset</button> 
      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-5 rounded-md border-none outline-none hover:bg-yellow'>Submit</button> 
      <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-full my-2 mx-2 translate-x-[50%] rounded-md border-none outline-none hover:bg-yellow'>Submit Add</button> 



      </div>



  <Outlet/>

    </div>
  )
}


export default InstituteForm