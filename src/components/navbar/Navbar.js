import React from "react";
import "./navbar.css";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h3>
          <AiOutlineBell />
        </h3>
        <img
          src="https://res.cloudinary.com/dk7xxtqnj/image/upload/v1646124162/zoiklyftkouksx5lm6q8.jpg"
          alt=""
        />
        <p>Akkarapot</p>
        <div className="navbar-icon">
          <AiOutlineCaretDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
