import React from "react";
import DetailBlog from "../../components/detailBlog/DetailBlog";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./detailList.css";

function DetailList() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="detailList-container">
        <Header />
        <DetailBlog />
      </div>
    </div>
  );
}

export default DetailList;
