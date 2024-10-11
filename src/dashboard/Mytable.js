import React from 'react'
import { Link } from 'react-router-dom'

function Mytable() {
  return (
<table className="table table-bordered border-primary mt-3     table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Days</th>
                        <th scope="col">Login Time</th>
                        <th scope="col">Logout Time</th>
                        <th scope="col"><div class="d-grid gap-2 col-sm-6 mx-auto">
  <button class="btn btn-primary" type="button">ACTION</button>
</div></th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <th scope="row">SUN</th>
                            <td>-----</td>
                            <td>-----</td>
                            <td>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Login</button></Link>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Logout</button></Link>
                            </td>
                            </tr>
                    </tbody>
                    <tbody>
                    <tr>
                            <th scope="row">MON</th>
                            <td>-----</td>
                            <td>-----</td>
                            <td>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Login</button></Link>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Logout</button></Link>
                            </td>
                            </tr>
                    </tbody>
                    <tbody>
                    <tr>
                            <th scope="row">TUE</th>
                            <td>-----</td>
                            <td>-----</td>
                            <td>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Login</button></Link>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Logout</button></Link>
                            </td>
                            </tr>
                    </tbody>
                    <tbody>
                    <tr>
                            <th scope="row">WED</th>
                            <td>-----</td>
                            <td>-----</td>
                            <td>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Login</button></Link>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Logout</button></Link>
                            </td>
                            </tr>
                    </tbody>
                    <tbody>
                    <tr>
                            <th scope="row">THU</th>
                            <td>-----</td>
                            <td>-----</td>
                            <td>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Login</button></Link>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Logout</button></Link>
                            </td>
                            </tr>
                    </tbody>
                    <tbody>
                    <tr>
                            <th scope="row">FRI</th>
                            <td>-----</td>
                            <td>-----</td>
                            <td>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Login</button></Link>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Logout</button></Link>
                            </td>
                            </tr>
                    </tbody>
                    <tbody>
                    <tr>
                            <th scope="row">SAT</th>
                            <td>-----</td>
                            <td>-----</td>
                            <td>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Login</button></Link>
                            <Link to="timeshow"><button type="button" class="btn btn-link">Logout</button></Link>
                            </td>
                            </tr>
                    </tbody>
                    
                    </table>
)
}

export default Mytable