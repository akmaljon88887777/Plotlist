import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Category from "./Components/Category/Filter/index";
import Loading from "./Components/loading";
// const [load, setload] = useState(true);
export default function App() {
  return (
    <div>
      <Loading />
      <div>
        <div className="img h-[100vh] flex flex-col items-start overflow-x-hidden">
          <Navbar />
          <Header />
        </div>
        <Category />
        <Carousel />
        <Footer />
      </div>
      <div></div>
    </div>
  );
}
