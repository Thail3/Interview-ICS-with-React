import React from "react";
import "./footer.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <span classname="footer-icon">
          <FiChevronLeft />
        </span>

        <p>1</p>

        <span classname="footer-icon">
          <FiChevronRight />
        </span>
      </div>
    </div>
  );
}

export default footer;
