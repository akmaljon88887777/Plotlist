import { TbBathFilled } from "react-icons/tb";
import { MdOutlineBathtub } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { CgPlayListRemove } from "react-icons/cg";
import { BiStar } from "react-icons/bi";
import React, { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Rasm from "./listing-01.jpg";
import Rasm3 from "./listing-icon-02.png";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function Carousel() {
  return (
    <div className="mb-10">
      <div className="flex justify-center text-center my-20 flex-col">
        <h4 className="text-[35px] font-bold">Recent listing</h4>
        <br />
        <p className="text-[16px] font-semibold text-[#8d99af]">
          CHECK THEM OUT
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
          direction="horizontal"
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <Swiper>
            <SwiperSlide className="">
              <div className="grid grid-cols-1 gap-[5%]">
                <div className="lg:flex grid bg-[#F7F7F7]">
                  <div className="w-full">
                    <img className="w-full" src={Rasm} alt="" />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start items-center justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="lg:flex grid justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                          {/* 	https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png */}
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex grid bg-[#F7F7F7]">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start items-center justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex grid bg-[#F7F7F7]">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-06.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start items-center justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="lg:flex grid justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-1 gap-[5%]">
                <div className="lg:flex grid bg-[#F7F7F7]">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-04.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start items-center justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="lg:flex grid justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex grid bg-[#F7F7F7]">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-05.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start items-center justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                          {/* 	https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png */}
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex grid bg-[#F7F7F7]">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-06.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start items-center justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="lg:flex grid justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-1 gap-[5%]">
                <div className="lg:flex grid bg-[#F7F7F7] rounded">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-05.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start items-center justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="lg:flex grid justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                          {/* 	https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png */}
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex grid bg-[#F7F7F7] rounded">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start items-center justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:flex grid bg-[#F7F7F7] rounded">
                  <div className="w-full">
                    <img
                      className="w-full"
                      src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-06.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full text-start p-[6%] pb-[4%]">
                    <div className="flex justify-between items-center">
                      <p className="text-[#2a2a2a] font-bold text-[20px]">
                        1 First Appartment unit
                      </p>
                      <div className="flex">
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                        <BiStar />
                      </div>
                      <p className="text-start text-[15px] font-normal text-[#8d99af]">
                        (18) Reviews
                      </p>
                    </div>
                    <p className="text-start text-[15px] text-[#8d99af]">
                      by: Sale Agent
                    </p>
                    <br />
                    <div className="flex text-start justify-start gap-3">
                      <div className="w-[30px] flex justify-center items-center h-[30px] rounded-full bg-[#8d99af]">
                        <CgPlayListRemove />
                      </div>
                      <p className="text-[15px]">$3600 / month with taxes</p>
                    </div>
                    <br />
                    <p className="text-[15px]">
                      Details: <em>3660 sq ft</em>
                    </p>
                    <br />
                    <div className="lg:flex grid justify-between">
                      <div>
                        <p className="flex text-[16px] items-center gap-3">
                          <FaBed size={20} /> 4 Bedrooms
                          {/* 	https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/listing-icon-03.png */}
                        </p>
                        <p className="flex text-[16px] items-center gap-3">
                          <TbBathFilled size={20} />3 Bathrooms
                        </p>
                      </div>
                      <div>
                        <button className="w-[186px] h-[48px] rounded flex justify-center items-center bg-white">
                          Contact Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Swiper>
      </div>
    </div>
  );
}
