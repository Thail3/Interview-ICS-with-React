import React from "react";
import "./sidebar.css";
import Logo from "../../assets/images/ICS.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-icon">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
