import React from "react";
import Rasm from "./search-icon-01.png";
import Rasm2 from "./search-icon-02.png";
import Rasm3 from "./search-icon-03.png";
import Rasm4 from "./search-icon-04.png";
import Rasm5 from "./search-icon-05.png";
function Header() {
  return (
    <div className="flex flex-col w-full justify-center items-center z-1">
      <div className="md:-mt-[650px] -mt-[500px] lg:mt-0">
        <div className="text-center">
          <h4 className="text-[16px] font-normal text-[#fff]">
            Over 36,500+ Active Listings
          </h4>
          <h4 className="xl:text-[45px] lg:text-[42px] md:text-[38px] text-[28px] text-[#fff] font-extrabold">
            Find Nearby Places & Things
          </h4>
        </div>
        <br />
        <div>
          <div className="flex justify-center">
            <div className="w-[84%] lg:h-[70px] h-[400px] rounded bg-[#fff] absolute lg:grid lg:grid-cols-4 grid-cols-1 md:grid grid lg:flex-row justify-items-center items-center">
              <div className="border-r border-gray-400 px-5">
                <select
                  className="xl:w-[298px] lg:w-[290px] md:w-[280px] w-[200px] h-[36px] outline-none"
                  name=""
                  id=""
                >
                  <option value="">All Areas</option>
                  <option value="">New Village</option>
                  <option value="">Old Town</option>
                  <option value="">Modern City</option>
                </select>
              </div>
              <div className="px-6 border-r border-gray-400">
                <input
                  type="address"
                  name="address"
                  placeholder="Enter a location"
                  autocomplete="on"
                  className="xl:w-[298px] lg:w-[290px] md:w-[280px] w-[200px] h-[36px] outline-none"
                />
              </div>
              <div className="px-6">
                <select
                  name="price"
                  className="xl:w-[298px] lg:w-[290px] md:w-[280px] w-[200px] h-[36px] outline-none"
                  aria-label="Default select example"
                >
                  <option>Price Range</option>
                  <option value="$100 - $250">$100 - $250</option>
                  <option value="$250 - $500">$250 - $500</option>
                  <option value="$500 - $1000">$500 - $1,000</option>
                  <option value="$1000+">$1,000 or more</option>
                </select>
              </div>
              <button
                className="xl:w-[298px] lg:w-[290px] md:w-[280px] w-[200px] h-[70px] bg-[#8d99af] flex justify-center items-center gap-5 text-white rounded-e"
                type="submit"
              >
                <i className="fa fa-search w-10 h-10 rounded-full bg-[#FFFFFF] text-[#8d99af] flex items-center justify-center"></i>
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="grid md:mt-[790px] xl:mt-96 md:gap-5 lg:mt-0 lg:grid-cols-5 grid-cols-2 xl:gap-[40%] z-10 absolute mt-[900px] justify-center">
        <div className="grid justify-items-center">
          <div className="w-[66px] h-[66px] bg-white rounded-full cursor-pointer flex justify-center items-center">
            <img src={Rasm} alt="" />
          </div>
          Appertments
        </div>
        <div className="grid justify-items-center">
          <div className="w-[66px] h-[66px] bg-white rounded-full cursor-pointer flex justify-center items-center">
            <img src={Rasm2} alt="" />
          </div>
          Food & Life
        </div>
        <div className="grid justify-items-center">
          <div className="w-[66px] h-[66px] bg-white rounded-full cursor-pointer flex justify-center items-center">
            <img src={Rasm3} alt="" />
          </div>
          Cars
        </div>
        <div className="grid justify-items-center">
          <div className="w-[66px] h-[66px] bg-white rounded-full cursor-pointer flex justify-center items-center">
            <img src={Rasm4} alt="" />
          </div>
          Shopping
        </div>
        <div className="grid justify-items-center">
          <div className="w-[66px] h-[66px] bg-white rounded-full cursor-pointer flex justify-center items-center">
            <img src={Rasm5} alt="" />
          </div>
          Traveling
        </div>
      </div>
    </div>
  );
}

export default Header;
