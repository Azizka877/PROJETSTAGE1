import React from "react";
import "./Sidebarmoi.css";
import "bootstrap/dist/css/bootstrap.min.css"

function SidebarMoi() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-success text-white offcanvas-md offcanvas-start ">
      <a href="" className="navbar-brand">
        <h5>
          <i className="bi bi-android">Notus</i>
        </h5>
      </a>
      <hr />
      <ul className="mynav nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-1">
          <a href="" className="active">
            <i className="bi bi-bell"></i>
            Notification
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMoi;
