import React from 'react'
import { Link } from 'react-router-dom'

function Myloginpage() {
  return (
    <div className='container p-5'>
        <div className='row justify-content-md-center'>
            <div className='col-md-4 bg-dark shadow p-5 mt-5'>
                <p className='h3 text-center text-white'>Login page</p>
                <hr/>
                <div class="mb-3">
                    <label  class="form-label text-white">Userid</label>
                    <input type="text" class="form-control" placeholder='userid'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label text-white">Password</label>
                    <input type="password" class="form-control" placeholder='password'/>
                </div>
                <div class="mb-3">
                    <Link  className='btn btn-outline-info' to="#">SUBMIT</Link>
                    <Link  className='btn btn-outline-info ms-3' to="/register">NEW USER</Link>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Myloginpage