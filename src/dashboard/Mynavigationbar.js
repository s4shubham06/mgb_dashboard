import React from "react";
import "../pages/style.css";
import { Link } from "react-router-dom";
import Myloginpage from "./Myloginpage";

const mgblogo = "https://mgbtechnologies.com/assets/img/mgbtechlogo-01-02.png";

function Mynavigationbar() {
  return (
    <>
    <div className="container">
<div class="text-center">
  <img src={mgblogo} class="rounded" style={{height:"53px",width:"180px"}} alt="..."/>
</div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-xs-12">
          <Link to="timeshow" className="btn btn-outline-primary d-grid gap-2 col-xs-4 col-sm-4 mx-auto mt-5 overflow-hidden">Employee Link</Link>
        </div>
      </div>
    </div>
    <div className="container">
    <Myloginpage/>
    </div>
    </>
  );
}

export default Mynavigationbar;
