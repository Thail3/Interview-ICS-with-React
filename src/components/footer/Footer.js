import React from "react";
import "./footer.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useGlobalContext } from "../../context/Context";

function Footer() {
  const { pageSize, totalPosts, nextPage, prevPage, handlePage } =
    useGlobalContext();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / pageSize); i++) {
    pageNumbers.push(i);
    // console.log("pageNumbers footer", pageNumbers);
  }

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <span className="footer-icon">
            <i key={prevPage} onClick={prevPage}>
              <FiChevronLeft />
            </i>
          </span>

          {pageNumbers.map((number) => {
            return <p onClick={() => handlePage(number)}>{number}</p>;
          })}

          <span className="footer-icon">
            <i key={nextPage} onClink={nextPage}>
              <FiChevronRight />
            </i>
          </span>
        </div>
      </div>
    </>

    // <div className="footer">
    //   <div className="footer-container">
    //     <span classname="footer-icon">
    //       <FiChevronLeft />
    //     </span>

    //     <p>1</p>

    //     <span classname="footer-icon">
    //       <FiChevronRight />
    //     </span>
    //   </div>
    // </div>
  );
}

export default Footer;
