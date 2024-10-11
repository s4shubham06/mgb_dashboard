import React from 'react'
import Mysidebar from './Mysidebar';
import { Outlet } from 'react-router-dom';


function Mainpage() {
  return (
    <div className='container-fluid mt-25 p-5'>
        <div className='row'>
            <div className='col-sm-2'>
              <Mysidebar></Mysidebar>
                
            </div>
            <div className='col-sm-10'>
              <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Mainpage