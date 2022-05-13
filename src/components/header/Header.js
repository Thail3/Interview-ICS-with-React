import React from "react";
import "./header.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <h3>Place List</h3>

        <div className="header-search">
          <div className="header-list">
            <ul>
              <li>Restaurants</li>
            </ul>
            <div className="header-icon">
              <AiFillCaretDown />
            </div>
          </div>

          <div className="header-line"></div>

          <div className="header-input">
            <input type="text" placeholder="Search name " />

            <div className="header-line-icon">
              <BsSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
