import React, { useState } from 'react';

function Mytable({ loginTime, logoutTime }) {
  return (
    <table className="table table-bordered border-primary mt-3 table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Days</th>
          <th scope="col">Login Time</th>
          <th scope="col">Logout Time</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Sun</th>
          <td>{loginTime || "Not Logged In"}</td>
          <td>{logoutTime || "Not Logged Out"}</td>
          <td><div class="d-grid gap-2 d-md-flex justify-content-md">
  <button class="btn btn-success me-md-2" type="button">Completed</button>
</div></td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">Mon</th>
          <td>{loginTime || "Not Logged In"}</td>
          <td>{logoutTime || "Not Logged Out"}</td>
          <td><div class="d-grid gap-2 d-md-flex justify-content-md">
  <button class="btn btn-danger me-md-2" type="button">Incompleted</button>
</div></td>
        </tr>
      </tbody>
    </table>
  );
}

function Navbartime() {
  const [loginTime, setLoginTime] = useState(null);
  const [logoutTime, setLogoutTime] = useState(null);

  const handleLogin = () => {
    setLoginTime(new Date().toLocaleTimeString());
  };

  const handleLogout = () => {
    setLogoutTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://mgbtechnologies.com/assets/img/mgbtechlogo-01-02.png" style={{ width: "180px", height: "53px" }} alt="" />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <button className="btn btn-outline-info me-2" type="button" onClick={handleLogin}>
                Login
              </button>
              <button className="btn btn-outline-info" type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>


    


      <Mytable loginTime={loginTime} logoutTime={logoutTime} />
    </div>
  );
}

export default Navbartime;