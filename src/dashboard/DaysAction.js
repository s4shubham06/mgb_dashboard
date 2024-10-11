import React, { useState } from 'react';

function DaysAction() {
  // Initialize the state with empty times for each row
  const [timeLogs, setTimeLogs] = useState([
    { id: 1, loginTime: '', logoutTime: '' },
    { id: 2, loginTime: '', logoutTime: '' },
    { id: 3, loginTime: '', logoutTime: '' },
    // Add more rows as needed
  ]);

  // Function to handle login time
  const handleLogin = (id) => {
    const currentTime = new Date().toLocaleTimeString();
    setTimeLogs((prevLogs) =>
      prevLogs.map((log) =>
        log.id === id ? { ...log, loginTime: currentTime } : log
      )
    );
  };

  // Function to handle logout time
  const handleLogout = (id) => {
    const currentTime = new Date().toLocaleTimeString();
    setTimeLogs((prevLogs) =>
      prevLogs.map((log) =>
        log.id === id ? { ...log, logoutTime: currentTime } : log
      )
    );
  };

  return (
    <table className="table table-bordered border-primary mt-3 table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Days</th>
          <th scope="col">Login Time</th>
          <th scope="col">Logout Time</th>
          <th scope="col">
            <div className="d-grid gap-2 col-sm-6 mx-auto">
              <button className="btn btn-primary" type="button">ACTION</button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {timeLogs.map((log) => (
          <tr key={log.id}>
            <th scope="row">{log.id}</th>
            <td>{log.loginTime}</td>
            <td>{log.logoutTime}</td>
            <td>
              <button className="btn btn-primary" onClick={() => handleLogin(log.id)}>Login</button>
              <button className="btn btn-primary ms-3" onClick={() => handleLogout(log.id)}>Logout</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DaysAction;