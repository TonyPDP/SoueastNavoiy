// src/Layout.js
import React from "react";
import NavbarWeb from "../NavbarWeb/NavbarWeb";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavbarWeb />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
