import React from "react";
import Mytable from "./Mytable";

const mgblogo="https://mgbtechnologies.com/assets/img/mgbtechlogo-01-02.png";


function Mynavigationbar() {
  return (
    <div classNameName="container">
      <div classNameName="row">
        <div classNameName="col-sm-12">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
              <img src={mgblogo} style={{ width: "180px", height: "53px" }} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <form className="d-flex">
                  <button className="btn btn-outline-info my_font_family " type="submit">
                    Login
                  </button>
                  <button className="btn btn-outline-info ms-2 my_font_family" type="submit">
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
        <div className="row">
        <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Login Working</button>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Logout Working</button>
</div>
        </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Mytable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mynavigationbar;
