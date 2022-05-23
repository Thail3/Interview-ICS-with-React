import React from "react";
import DetailBlog from "../../components/detailBlog/DetailBlog";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./detailList.css";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function DetailList() {
  // let navigate = useNavigate();
  // const { id } = useParams();
  // console.log("useparam detailList", id);

  // const routeChange = () => {
  //   let path = `/detail/${id}`;
  //   navigate(path);
  // };

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
