import React from 'react'




function Registorpage() {
  return (
    <div className='container'>
        <div className='row justify-content-md-center'>
            <div className='col-md-8 col-sm-8 col-xs-8 bg-dark shadow p-5 '>
                <p className='h3 text-center text-white'>User Register</p>
                <hr/>
                <span className=''>    
                     <input className='mb-3' type='text' placeholder='Enter Employee id'/>
                </span>
                <div class="mb-3">
                    <label  class="form-label text-white">UserName</label>
                    <input type="text" class="form-control" placeholder='username'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label text-white">Phone No</label>
                    <input type="text" class="form-control" placeholder='phone no'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label text-white">Email id</label>
                    <input type="email" class="form-control" placeholder='email'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label text-white">D.O.B</label>
                    <input type="date" class="form-control" placeholder='D.O.B'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label text-white">Joining Date</label>
                    <input type="datetime-local" class="form-control" placeholder='joining date'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label text-white">Gender</label>
                  <select className='form-control'>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="mb-3">
                    <label  class="form-label text-white">Designation</label>
                  <select className='form-control'>
                  <option>Developer</option>
                  <option>Designer</option>
                    <option>Sales</option>
                    <option>video Editor</option>
                  </select>
                </div>

                <div class="mb-3">
                    <label  class="form-label text-white">Department</label>
                  <select className='form-control'>
                  <option>ABC</option>
                  <option>XYZ</option>
                    <option>123</option>
                    <option>@#$</option>
                  </select>
                </div>

                
                <div class="mb-3">
                    <label  class="form-label text-white">Create Password</label>
                    <input type="password" class="form-control" placeholder='password'/>
                </div>
                <div class="mb-3">
                    <label  class="form-label text-white">Re-enter Password</label>
                    <input type="password" class="form-control" placeholder='password'/>
                </div>
                <div class="mb-3 text-center">
                    <input type='button' className='btn btn-success ms-4' value="submit"/>
                    <input type='reset' className='btn btn-danger ms-5' value="cancel"/>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Registorpage