import React, {useState} from 'react'
import Select from 'react-select';
import Calendar from 'react-calendar';
import { Outlet } from 'react-router-dom';

const ReportsTable = () => {

    
  const optionsadmin = [

    { label: 'selvam' },
    { label: 'Satish' },
    { label: 'Prakash' },
    { label: 'All' },
  
  ];
  
  const placeholderadmin = 'Admin Name';

  const optionsinstitute = [

      { label: 'School' },
      { label: 'College' },
      { label: 'Private Institute' },
    
    ];

  const placeholderinstitute = 'Institute Type';

  
  const optionsbranch = [

    { label: 'School' },
    { label: 'College' },
    { label: 'Private Institute' },
  
  ];

  const placeholderbranch = 'Branch Type';

  const [showFromCalendar, setShowFromCalendar] = useState(false);
  const [selectedFromDate, setSelectedFromDate] = useState(new Date());
  const [showToCalendar, setShowToCalendar] = useState(false);
  const [selectedToDate, setSelectedToDate] = useState(new Date());

  const handleOpenFromCalendar = () => {
    setShowFromCalendar(true);
  };

  const handleOpenToCalendar = () => {
    setShowToCalendar(true);
  };

  const handleCloseFromCalendar = () => {
    setShowFromCalendar(false);
  };

  const handleCloseToCalendar = () => {
    setShowToCalendar(false);
  };

  const handleSelectFromDate = () => {
    //onSelect(selectedFromDate);
    handleCloseFromCalendar();
  };

  const handleSelectToDate = () => {
    //onSelect(selectedToDate);
    handleCloseToCalendar();
  };
  
  const [activecount, setactivecount] = useState(0);
  const [dormantcount, setdormantcount] = useState(0);
  const [bandwidthcount, setbandwidthcount] = useState(0);
  const [diskcount, setdiskcount] = useState(0);

  const incountactive = () => {
    setactivecount(activecount + 1);
  };

  const incountdormant = () => {
    setdormantcount(dormantcount + 1);
  };

  const incountbandwidth = () => {
    setbandwidthcount(bandwidthcount + 1);
  };

  const incountdisk = () => {
    setdiskcount(diskcount + 1);
  };

  const decountactive = () => {
    if (activecount > 0) {
    setactivecount(activecount - 1);
  }
  };

  const decountdormant = () => {
    if (dormantcount > 0) {
    setdormantcount(dormantcount - 1);
  }
  };

  const decountbandwidth = () => {
    if (bandwidthcount > 0) {
    setbandwidthcount(bandwidthcount - 1);
  }
  };

  const decountdisk = () => {
    if (diskcount > 0) {
    setdiskcount(diskcount - 1);
  }
  };

  const inputchangeactive = (e) => {

    const newValue = parseInt(e.target.value, 10);

    if (!isNaN(newValue)) {
      setactivecount(newValue);
    }
  };
  
  const inputchangedormant = (e) => {

    const newValue = parseInt(e.target.value, 10);

    if (!isNaN(newValue)) {
      setdormantcount(newValue);
    }
  };
  
  const inputchangebandwidth = (e) => {

  const newValue = parseInt(e.target.value, 10);

  if (!isNaN(newValue)) {
    setbandwidthcount(newValue);
  }
  };

  const inputchangedisk = (e) => {

  const newValue = parseInt(e.target.value, 10);

  if (!isNaN(newValue)) {
    setdiskcount(newValue);
  }
  };


  return (
   
    <div className='absolute flex justify-center left-[5%] translate-y-[50%] overflow-y-scroll rounded-lg w-full px-64'>

    <div className='grid grid-cols-2'>
      
      <div className=' border-greenbg outline-greenbg mx-2 mt-2 w-full'>
        <Select 
          options={optionsadmin} 
          placeholder={placeholderadmin}
        />
      </div>
      
      <div className=' border-greenbg outline-greenbg mx-5 mt-2 w-full'>
        <Select 
          options={optionsinstitute} 
          placeholder={placeholderinstitute}
        />
      </div>

      <div className=' border-greenbg outline-greenbg mx-2 mt-2 w-full'>
        <Select 
          options={optionsbranch} 
          placeholder={placeholderbranch}
        />
      </div>

      <div className='py-3 mx-5'>
      <button onClick={handleOpenFromCalendar}> From </button>
      {showFromCalendar && (

        <div>

          <Calendar
            onChange={setSelectedFromDate}
            value={selectedFromDate}
          />

        <div className=' w-64'>
          <button onClick={handleCloseFromCalendar} className=' text-lg font-semibold text-greenbg px-5'>Cancel</button>
          <button onClick={handleSelectFromDate} className=' text-lg font-semibold text-greenbg px-5'>OK</button>
        </div>

        </div>

        )}

      </div>
      
      <div className=' border-greenbg py-3 mx-2'>
      <button onClick={handleOpenToCalendar}> To </button>
      {showToCalendar && (

        <div>

          <Calendar
            onChange={setSelectedToDate}
            value={selectedToDate}
          />
          
        <div className=' w-64'>
          <button onClick={handleCloseToCalendar} className=' text-lg font-semibold text-greenbg px-5'>Cancel</button>
          <button onClick={handleSelectToDate} className=' text-lg font-semibold text-greenbg px-5'>OK</button>
        </div>

        </div>

        )}

      </div>

      <div className='py-3 mx-5 px-2'>

      <frameElement className="mx-3">List account that uses VR</frameElement>

      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-4 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"/>
      </label>
      </div>  
        
      <div className='py-3 mx-2 px-2'>

      <frameElement className="mx-3">List accounts that have branches</frameElement>

      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-4 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"/>
      </label>
      </div>  
      
      <div className='h-10 mt-2 mx-2 rounded-lg flex justify-around items-center'>

        <p>Highest active accounts</p>
      
      <button onClick={decountactive} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={activecount}
        onChange={inputchangeactive}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incountactive}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>

      <div className='h-10 mt-2 mx-2 rounded-lg flex justify-around items-center'>

        <p>Dormant accounts</p>
      
      <button onClick={decountdormant} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={dormantcount}
        onChange={inputchangedormant}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incountdormant}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>
        
      <div className='h-10 mt-2 mx-2 rounded-lg flex justify-around items-center'>

        <p>Bandwidth consumption</p>
      
      <button onClick={decountbandwidth} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={bandwidthcount}
        onChange={inputchangebandwidth}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incountbandwidth}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>
              
      <div className='h-10 mt-2 mx-2 rounded-lg flex justify-around items-center'>

        <p>Disk Usage</p>
      
      <button onClick={decountdisk} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={diskcount}
        onChange={inputchangedisk}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incountdisk}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>

      <div></div>

      <div className='flex justify-center my-3'>
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-[50%] my-2 mx-2 translate-x-[50%] rounded-md border-none outline-none hover:bg-yellow'>Generate</button> 
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 w-[50%] my-2 mx-2 translate-x-[50%] rounded-md border-none outline-none hover:bg-yellow'>Reset</button> 
      </div>

    </div>

    <Outlet/>

    </div>
  )
}

export default ReportsTable;