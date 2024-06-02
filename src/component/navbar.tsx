import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import outdoor from "../assets/images/icons/outdoor-cafe.svg";

import sofa from "../assets/images/icons/sofa.svg";
import terrace from "../assets/images/icons/terrace.svg";
import bed from "../assets/images/icons/bed.svg";

import bed2 from "../assets/images/icons/bed-2.svg";

import office from "../assets/images/icons/office.svg";
import { BrowserView, MobileOnlyView } from "react-device-detect";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

// import { Button, Popover } from "flowbite-react";

const Navbar = () => {
  return (
    <>
      <BrowserView>
        <nav className="bg-gray-950 flex justify-evenly">
          <div className="container flex  justify-evenly w-full ">
            <div className="px-8 py-4 mt-4 h-4 bg-gray-400 md:flex   hover:bg-gray-100   hover:text-black  rounded-t-lg   hover:rounded-t-lg items-center cursor-pointer relative group hidden">
              <span className="hover:text-black">
                <AiOutlineBars />
              </span>
              <span className="capitalize ml-2   hover:text-black">
                All Categories
              </span>
              <span className=" hover:text-black ">
                <MdOutlineKeyboardArrowDown />
              </span>

              <div className="absolute w-full left-0 top-full rounded-b-lg bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <Link
                  to="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src={sofa}
                    alt="sofa"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src={terrace}
                    alt="terrace"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img src={bed} alt="bed" className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Bed</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src={office}
                    alt="office"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">office</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src={outdoor}
                    alt="outdoor"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src={bed2}
                    alt="Mattress"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                </Link>
              </div>
            </div>

            <div className="flex  justify-evenly flex-grow md:pl-12 py-5  ">
              <div className=" ">
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition"
                >
                  Home
                </Link>
              </div>
              <div className=" ">
                <Link
                  to="/shop"
                  className="text-gray-200 hover:text-white transition"
                >
                  Shop
                </Link>
              </div>

             
                <div className="  capitalize ">
                  <Link
                    to="/product"
                    className="text-gray-200 hover:text-white transition"
                  >
                    product
                  </Link>
                </div>
                <div className="  capitalize ">
                  <Link
                    to="#"
                    className="text-gray-200 hover:text-white transition"
                  >
                    Contact us
                  </Link>
                </div>
                <div className=" capitalize ">
                  <Link
                    to="/login"
                    className="text-gray-200 items-end hover:text-white transition"
                  >
                    Login
                  </Link>
                </div>
              </div>
          </div>
         
        </nav>
      </BrowserView>

      <MobileOnlyView>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="swimsuit 2024"
            className=" mx-3 py-2 px-2 w-full h-10 rounded-full border border-gray-600 bg-gray-700 text-white"
          />
          <button className="absolute top-1 right-0 h-8 rounded-full bg-gray-700 text-white px-4">
            <FiSearch className="text-black" />
          </button>
        </div>
      </MobileOnlyView>
    </>
  );
};

export default Navbar;
