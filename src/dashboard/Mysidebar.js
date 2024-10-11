import React from 'react'

function Mysidebar() {
  return (
    <div className="flex-shrink-0">
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <span className="fs-5 fw-semibold text-light p-3 f">Sidebar</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-outline-info align-items-center rounded collapsed  " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Home
        </button>
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-light rounded">Overview</a></li>
            <li><a href="#" className="link-light rounded">Updates</a></li>
            <li><a href="#" className="link-light rounded">Reports</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-outline-info align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          About
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-light rounded">Overview</a></li>
            <li><a href="#" className="link-light rounded">Weekly</a></li>
            <li><a href="#" className="link-light rounded">Monthly</a></li>
            <li><a href="#" className="link-light rounded">Annually</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-outline-info align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-light rounded">New</a></li>
            <li><a href="#" className="link-light rounded">Processed</a></li>
            <li><a href="#" className="link-light rounded">Shipped</a></li>
            <li><a href="#" className="link-light rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-outline-info align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div className="collapse" id="account-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-light rounded">New...</a></li>
            <li><a href="#" className="link-light rounded">Profile</a></li>
            <li><a href="#" className="link-light rounded">Settings</a></li>
            <li><a href="#" className="link-light rounded">Sign out</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
   
  )
}

export default Mysidebar