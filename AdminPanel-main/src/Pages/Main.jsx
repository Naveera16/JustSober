import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navheader from "../Components/Navheader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainPage = () => {
  return (
    <>
      {/* <!--**********************************
      Main wrapper start
  ***********************************--> */}
      <div id="main-wrapper" />

      {/* <!--**********************************
          Nav header start
      ***********************************--> */}
      <Navheader />
      {/*  <!--**********************************
          Header start
      ***********************************--> */}
      <Header />
      {/*<!--**********************************
          Sidebar start
      ***********************************--> */}
      <Sidebar />
      {/*<!--**********************************
          Content body start
      ***********************************--> */}
      <div className="content-body">
        <Outlet />
      </div>
      {/* <!--**********************************
          Footer
      ***********************************--> */}
      <Footer />
    </>
  );
};

export default MainPage;
