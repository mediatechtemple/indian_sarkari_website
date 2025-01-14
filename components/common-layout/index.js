// components/CommonLayout.js
import React from "react";
import Header from "../header";
import Footer from "../footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="w-full max-w-5xl m-auto">
      <Header />
      <main className="container w-full max-w-5xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
