import { Card } from "@material-tailwind/react";
import React from "react";
import Rasm from "./listing-icon-02 (1).png";
function CartStyle({ img }) {
  return (
    <div className="flex flex-col gap-9">
      <Card className="w-[100%] xl:w-full shadoww bg-[#F7F7F7] lg:w-full rounded-2xl">
        <div className="grid xl:flex xl:w-[100%] md:w-full lg:flex lg:w-[60%]">
          <img
            src={img}
            className="w-[100%] xl:w-[60%] rounded-tl-2xl xl:rounded-bl-2xl"
            alt=""
          />
          <div className="xl:p-8 p-5 mt-7">
            <div className="grid gap-4 w-[100%]">
              <h3 className="font-bold text-[22px]"> FOOD Second Page</h3>
            </div>
            <div>
              <p className="text-[#8d99af] w-[200px] text-[15px] mt-8">
                by: Food Delivery
              </p>
            </div>
            <div className="mt-5">
              <p> $600 / month included tax</p>
            </div>
            <div className="mt-9">
              <span className="text-[#8d99af]">Details: </span>
              <span>860 sq ft</span>
            </div>
            <div className="flex gap-5 items-center mt-10">
              <img className="h-[16px]" src={Rasm} alt="" />
              <p> 2 Bedrooms</p>
            </div>
            <div className="flex gap-5 items-center mt-4">
              <img className="h-[16px]" src={Rasm} alt="" />
              <p> 3 Bedrooms</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CartStyle;
