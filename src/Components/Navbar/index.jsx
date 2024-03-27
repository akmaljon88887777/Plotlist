import { MdAddCircle } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import jQuery from "jquery";
function Navbar() {
  jQuery(function ($) {
    var $navbar = $(".navbar");
    $(window).scroll(function (event) {
      var $current = $(this).scrollTop();
      if ($current > 0) {
        $navbar.addClass("navbar_fixed");
      } else {
        $navbar.removeClass("navbar_fixed");
      }
    });
  });
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 120; // 20 o'rniga o'zgartiring
      if (isScrolled !== demo) {
        setDemo(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [demo]);
  return (
    <div className="flex justify-center z-50">
      <div
        className={`${
          demo
            ? "shadow-xl p-5 bg-[#fff] top-0 fixed w-full border-b"
            : " top-0 fixed bg-transparent w-full p-5"
        }`}
      >
        <div className="flex justify-between lg:w-[86%] w-[95%] m-auto items-center">
          <div>
            <img
              className={`${demo ? "hidden" : "md:flex hidden"}`}
              src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/white-logo.png"
              alt=""
            />
            <img
              className={`${demo ? "flex" : "md:hidden flex"}`}
              src="https://templatemo.com/templates/templatemo_564_plot_listing/assets/images/black-logo.png"
              alt=""
            />
          </div>
          <div className="md:hidden flex">
            <div
              style={{
                backgroundColor: "",
              }}
              className=""
              onClick={() => {
                setOpen(!open);
                setMenu(!menu);
              }}
            >
              {menu ? (
                <button>
                  <CgClose size={"30px"} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  <CgMenuLeft size={"30px"} />
                </button>
              )}
            </div>
          </div>

          <div className=" items-center lg:gap-14 md:gap-5 md:flex hidden">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? `text-gray-500 uppercase text-[15px] `
                  : ` uppercase text-[15px]`
              }
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? `text-gray-500 uppercase text-[15px] `
                  : ` uppercase text-[15px]`
              }
            >
              <span>Category</span>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? `text-gray-500 uppercase text-[15px] `
                  : ` uppercase text-[15px]  `
              }
            >
              <span>Listing</span>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? `text-gray-500 uppercase text-[15px] `
                  : ` uppercase text-[15px]`
              }
            >
              <span>Contact Us</span>
            </NavLink>
            <button className="bg-[#8D99AF] w-[208px] h-[40px] justify-center gap-[12px] items-center rounded-[9px] text-white flex">
              <MdAddCircle color="#000" size={24} /> Add Your Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
