import React from 'react'

function Mysidebar() {
  return (
    <div className="flex-shrink-0">
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <span className=" my_font_family fs-5 fw-semibold text-light p-3 f">Sidebar</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-outline-info align-items-center rounded collapsed my_font_family   " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Home
        </button>
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-light rounded my_font_family ">Overview</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Updates</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Reports</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-outline-info align-items-center rounded collapsed my_font_family " data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          About
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-light rounded my_font_family ">Overview</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Weekly</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Monthly</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Annually</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-outline-info align-items-center rounded collapsed my_font_family " data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-light rounded my_font_family ">New</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Processed</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Shipped</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Returned</a></li>
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-outline-info align-items-center rounded collapsed my_font_family " data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
        <input type="date" />
        </button>
        <div className="collapse" id="account-collapse">
          {/* <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-light rounded my_font_family ">New...</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Profile</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Settings</a></li>
            <li><a href="#" className="link-light rounded my_font_family ">Sign out</a></li>
          </ul> */}
        </div>
      </li>
    </ul>
  </div>
   
  )
}

export default Mysidebar