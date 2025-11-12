import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { RiSearchLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BsCartDash } from "react-icons/bs";
import favIcon from "../assets/images/favicon.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

  const [showNav  ,setShowNav] = useState(false)


  return (
    <>
      <nav id="Navbar" className="py-[27px]  hidden lg:block">
        <div className="container">
          <div className="navRow flex justify-between items-center">
            <Link to={"/"} className="navLogo">
              <img src={logo} alt="logo" />
            </Link>
            <div className="navSrc w-[400px] h-[52px] bg-primary rounded-[100px] flex items-center px-6 gap-[10px]">
              <RiSearchLine />
              <input
                placeholder="Search in products..."
                className="flex-1 outline-none text-sm font-normal font-poppins text-secendary"
                type="text"
              />
            </div>
            <div className="navIcons">
              <button className="text-xl text-secendary">
                <BiUser />
              </button>
              <button className="text-xl text-secendary ml-[22px] relative">
                <BsCartDash />
                <div className="w-[20px] h-[20px] bg-[#0EA5E9] text-white flex justify-center items-center rounded-full text-[14px]  absolute bottom-[10px] right-[-5px]">
                  3
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* --------------- mobile nav */}
      <nav id="Navbar" className="py-[27px]   lg:hidden px-2">
        <div className="container">
          <div className="navRow flex justify-between items-center">
            <Link to={"/"} className="navLogo">
              <img src={favIcon} alt="logo" />
            </Link>
            <div className="navSrc w-[200px] h-[36px] bg-primary rounded-[100px] flex justify-between px-[16px] gap-[6px] items-center ">
              <RiSearchLine className="text-xl" />
              <input
                placeholder="Search in products..."
                className=" w-full outline-none text-sm font-normal font-poppins text-secendary"
                type="text"
              />
            </div>

            <button onClick={()=>setShowNav(!showNav)} className="text-xl ">
              <FaBars />
          
            </button>
              {

              showNav&&
            <div className="navIcons absolute top-[70px] left-2 w-[300px] bg-gray-100 flex justify-center p-2 ronded-[5px] ">
              <button className="text-xl text-secendary">
                <BiUser />
              </button>
              <button className="text-xl text-secendary ml-[22px] relative">
                <BsCartDash />
                <div className="w-[20px] h-[20px] bg-[#0EA5E9] text-white flex justify-center items-center rounded-full text-[14px]  absolute bottom-[10px] right-[-5px]">
                  3
                </div>
              </button>
            </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
