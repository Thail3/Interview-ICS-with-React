import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PlaceList from "../../components/placeList/PlaceList";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="home-container">
        <Header />
        <PlaceList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
