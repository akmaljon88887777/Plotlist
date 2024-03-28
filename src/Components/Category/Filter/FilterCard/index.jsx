import { BsEyeFill } from "react-icons/bs";
import { Card } from "@material-tailwind/react";
import React from "react";
import Rasm from "./listing-icon-02 (1).png";
import "../style.css";
function CartStyle({ img }) {
  return (
    <div className="flex flex-col gap-9 ">
      <Card
        style={{ boxShadow: "none" }}
        className="w-[100%] xl:w-full lg:w-full rounded-2xl bg-[#2B2D42]"
      >
        <div className="grid md:p-8 md:ml-0 lg:ml-0 xl:ml-0 -ml-1.5 xl:flex items-center bg-[#2B2D42] text-[#fff] shadow-none xl:w-[100%] md:w-full lg:flex lg:w-[60%]">
          <div className="w-full lg:text-start xl:text-start md:text-start text-center">
            <h4 className="xl:text-[20px] lg:text-[19px] md:text-[18px] text-[14px] xl:w-[300px] w-full font-bold">
              Information and Safety Tips for Traveling
            </h4>
            <br />
            <div>
              <p style={{ lineHeight: "2" }} className="text-[15px] ">
                You are allowed to use this template for your commercial
                websites. You are NOT allowed to redistribute this template ZIP
                file on any Free CSS collection websites.
              </p>
            </div>
            <br />
            <button className="xl:w-[356px] md:mb-10 btn xl:ml-0 lg:ml-0 md:ml-0 m-auto w-[300px] h-[48px] gap-[2%] md:w-full rounded-lg hover:bg-[#8D99AF] hover:text-[#fff] duration-1000 flex justify-center items-center text-[#222] text-[15px] font-light bg-white mt-3">
              <i
                style={{ fontSize: "15px" }}
                class="fa-regular fa-eye w-[26px] text-[#fff] h-[26px] flex items-center bg-[#8d99af] justify-center rounded-full"
              ></i>
              Discover More
            </button>
          </div>
          <img
            src={img}
            className="w-[100%] xl:pb-14 xl:w-[50%] lg:w-[50%] xl:h-[90vh] width bg-transparent lg:h-[800px] lg:ml-40 lg:mb-10 rounded-tr-2xl xl:rounded-br-2xl xl:ml-20 lg:mt-[-15.5s%]"
            alt=""
          />
        </div>
      </Card>
    </div>
  );
}

export default CartStyle;
