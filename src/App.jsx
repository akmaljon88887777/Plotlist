import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Category from "./Components/Category/Filter/index";

export default function App() {
  return (
    <div>
      <div>
        <div></div>
        <div className="img h-[100vh] flex flex-col items-start overflow-x-hidden">
          <Navbar />
          <Header />
        </div>
        <Category />
        <Carousel />
        <Footer />
      </div>
    </div>
  );
}
