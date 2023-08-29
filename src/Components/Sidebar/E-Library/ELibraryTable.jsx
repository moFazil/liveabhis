import React from 'react'
import {Outlet} from 'react-router-dom';

const ELibraryTable = () => {
  return (
    <div>
        <h1>ELibraryTable</h1>
    <Outlet/>
    </div>
  )
}

export default ELibraryTable;