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
  ];
  const [click, setClick] = useState("Html");
  return (
    <section
      className="items-center w-full xl:pb-10 md:grid md:px-10"
      style={{}}
    >
      <div className=" md:gap-10 xl:flex xl:mt-10 grid lg:w-[100%] items-start m-auto xl:w-[86%]  gap-10 lg:flex md:grid md:w-[100%] ">
        <div className="text-xl font-extrabold lg:w-[30%] w-[96%] m-auto grid gap-10 xl:w-[34%] md:w-[100%]">
          <div
            style={{ borderRadius: "5.5px", height: "116px" }}
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
                <p className="text-white font-medium text-[16px]">Apartments</p>
              </div>
            </button>
          </div>
          <div
            style={{ height: "118px", borderRadius: "6px" }}
            className={`${
              click === "Photo"
                ? "bg-[#2B2D42] p-6 rounded-[8px] "
                : "border-[3px]  p-6 rounded-[8px] bg-[#8D99AF] border-[#825A8A]"
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
          </div>
          <div
            style={{ height: "118px", borderRadius: "6px" }}
            className={`${
              click === "Word"
                ? "bg-[#2B2D42] p-6 rounded-[8px] "
                : "bg-[#8D99AF] border-[3px] p-6 rounded-[8px] border-[#825A8A]"
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
          </div>
          <button
            style={{ height: "118px", borderRadius: "6px" }}
            className={`${
              click === "Mobile"
                ? "bg-[#2B2D42] p-6 rounded-[8px] "
                : "border-[3px]  p-6 rounded-[8px] bg-[#8D99AF] border-[#825A8A]"
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
                <p className="text-white text-[16px] font-medium">Traveling</p>
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
  );
}

export default Category;
