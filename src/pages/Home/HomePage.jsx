import React from "react";
import HeaderStats from "pages/Home/Header/HeaderStats";
import "./home.scss"
import Dashboard from "pages/Dashbord/Dashbord";
function HomePage() {
  return (
    <div style={{ backgroundColor: "#edf5f9" }}>
      <div style={{ backgroundColor: "#0284c7" }}>
      <HeaderStats/>
    </div>
    <div className="position-absolute ">
    <Dashboard />
    </div>
    </div>
  )
}

export default HomePage