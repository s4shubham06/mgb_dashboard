import React from "react";
import "../pages/style.css";
import Myloginpage from "./Myloginpage";
import { Link } from "react-router-dom";

const mgblogo = "https://mgbtechnologies.com/assets/img/mgbtechlogo-01-02.png";

function Mynavigationbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-3 col-sm-4 col-md-6 col-lg-12">
          <nav className="navbar bg-dark">
            <a class="navbar-brand" href="#">
              <img className="img-responsive" src={mgblogo} alt="" />
            </a>
          </nav>
        </div>
        <div className="col-xs-3 col-sm-4 col-md-6 col-lg-12">
          <div class="d-grid gap-2 col-4 mx-auto">
            <Link to="timeshow" class="btn btn-primary" type="button">
              Employee Login
            </Link>
          </div>
        </div>
        <div className="col-xs-3 col-sm-4 col-md-6 col-lg-12">
          <Myloginpage/>
        </div>
      </div>
    </div>
  );
}

export default Mynavigationbar;
