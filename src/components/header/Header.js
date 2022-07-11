import React from "react";
import "./header.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";

function Header() {
  const { id } = useParams();
  console.log("useparams Header", id);

  const { currentPage, searchItems } = useGlobalContext();
  console.log("currentpage Header", currentPage);

  const filterHeader = currentPage.filter((item) => {
    return item.id.toString() === id;
  });
  console.log("filterHeader Header", filterHeader);

  return (
    <div className="header">
      {filterHeader.id !== id ? (
        <Link to="/" className="header-link" key={id}>
          <div className="header-backHome">
            <p>Back to Home</p>
          </div>
        </Link>
      ) : (
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
              <input
                type="text"
                placeholder="Search name "
                onChange={(e) => searchItems(e.target.value)}
              />

              <div className="header-line-icon">
                <BsSearch />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
