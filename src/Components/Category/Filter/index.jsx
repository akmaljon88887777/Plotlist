import React, { useState } from "react";
import Rasm4 from "./search-icon-05.png";
import Rasm3 from "./search-icon-03.png";
import Rasm2 from "./search-icon-02.png";
import Rasm1 from "./search-icon-01.png";
import CartStyle from "./FilterCard";
import Listing from "./listing-01.jpg";
import Listing4 from "./listing-04.jpg";
import Listing3 from "./listing-03.jpg";
import Listing5 from "./listing-05.jpg";
import Listing6 from "./tabs-image-05.jpg";
import "./style.css";
function Category() {
  const data = [
    {
      img: Listing,
      title: "Html",
    },
    {
      img: Listing4,

      title: "Photo",
    },
    {
      img: Listing3,

      title: "Word",
    },
    {
      img: Listing5,
      title: "Mobile",
    },
    {
      img: Listing6,
      title: "Footer",
    },
  ];
  const [click, setClick] = useState("Html");
  return (
    <div>
      <div className="flex justify-center text-center mt-24 flex-col">
        <h4 className="text-[35px] font-bold">Popular Categories</h4>
        <br />
        <p className="text-[16px] font-semibold text-[#8d99af]">
          CHECK THEM OUT
        </p>
      </div>
      <section className="items-center margins w-full xl:pb-10 md:grid md:px-10 px-0 lg:mt-[8%] xl:mt-[6%]">
        <div className=" md:gap-10 marginleft xl:flex bg-[#2B2D42] rounded lg:pr-16 pt-16 xl:mt-10 xl:pb-0 grid lg:w-[100%] items-start m-auto xl:w-[92%] w-[92%] gap-10 lg:flex md:grid md:w-[100%] ">
          <div className="text-xl font-extrabold gap-0.5 lg:w-[30%] w-[96%] m-auto grid xl:w-[34%] md:w-[100%]">
            <button
              style={{ borderRadius: "0px", height: "126px" }}
              className={`${
                click === "Html"
                  ? "bg-[#2B2D42] p-6 rounded-[8px] "
                  : "border-[3px]  p-6 rounded-[8px] bg-[#8D99AF] border-[#825A8A]]"
              } ""`}
              onClick={() => {
                setClick("Html");
              }}
            >
              <button className="flex cursor-pointer gap-4 items-center justify-center lg:justify-start">
                <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                  <img src={Rasm1} alt="" />
                </div>
                <div>
                  <p className="text-white font-medium text-[16px]">
                    Apartments
                  </p>
                </div>
              </button>
            </button>
            <button
              style={{ height: "126px" }}
              className={`${
                click === "Photo" ? "bg-[#2B2D42] p-6  " : "p-6 bg-[#8D99AF] "
              } ""`}
              onClick={() => {
                setClick("Photo");
              }}
            >
              <button className="flex cursor-pointer gap-4 items-center justify-center lg:justify-start">
                <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                  <img src={Rasm2} alt="" />
                </div>
                <div>
                  <p className="text-white text-[16px] font-medium">
                    Food & Life
                  </p>
                </div>
              </button>
            </button>
            <button
              style={{ height: "126px" }}
              className={`${
                click === "Word" ? "bg-[#2B2D42] p-6  " : "bg-[#8D99AF] p-6"
              } ''`}
              onClick={() => {
                setClick("Word");
              }}
            >
              <button className="cursor-pointer flex gap-4 items-center justify-center lg:justify-start">
                <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                  <img src={Rasm3} alt="" />
                </div>
                <div>
                  <p className="text-white text-[16px] font-medium">Cars</p>
                </div>
              </button>
            </button>
            <button
              style={{ height: "126px" }}
              className={`${
                click === "Mobile" ? "bg-[#2B2D42] p-6  " : "p-6 bg-[#8D99AF]"
              } ''`}
              onClick={() => {
                setClick("Mobile");
              }}
            >
              <button className="cursor-pointer flex gap-4 items-center justify-center lg:justify-start">
                <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                  <img src={Rasm4} alt="" />
                </div>
                <div>
                  <p className="text-white text-[16px] font-medium">Shopping</p>
                </div>
              </button>
            </button>
            <button
              style={{ height: "126px" }}
              className={`${
                click === "Footer" ? "bg-[#2B2D42] p-6 " : "p-6 bg-[#8D99AF]"
              } ''`}
              onClick={() => {
                setClick("Footer");
              }}
            >
              <button className="cursor-pointer flex gap-4 items-center justify-center lg:justify-start">
                <div className="bg-white w-[65px] h-[65px] rounded-full flex items-center justify-center ">
                  <img src={Rasm4} alt="" />
                </div>
                <div>
                  <p className="text-white text-[16px] font-medium">
                    Traveling
                  </p>
                </div>
              </button>
            </button>
          </div>
          <div className=" w-[96%] m-auto md:w-[100%]">
            {data
              .filter((elem) => {
                if (click === "All") {
                  return elem;
                } else {
                  return elem.title === click;
                }
              })
              .map((item) => (
                <CartStyle key={item.id} img={item.img} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
