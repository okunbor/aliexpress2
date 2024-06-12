import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


import { BrowserView, MobileOnlyView } from "react-device-detect";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// import { Button, Popover } from "flowbite-react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    // Fetch categories and subcategories from the mock API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);



  return (
    <>
      <BrowserView>
      <nav className="bg-gray-950 flex justify-evenly pt-4 ">
      <div className="container flex justify-evenly  w-full    ">
        <div className="relative group hidden md:flex px-8 py-4 mt-4 h-4 bg-gray-400 items-center cursor-pointer rounded-t-lg hover:bg-gray-100 hover:text-black">
          <span className="hover:text-black">
            <AiOutlineBars />
          </span>
          <span className="capitalize ml-2 hover:text-black">
            All Categories
          </span>
          <span className="hover:text-black">
            <MdOutlineKeyboardArrowDown />
          </span>

          <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 rounded-b-lg divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            <div className="flex">
              {/* Category List */}
              <div className="w-1/3 bg-white p-4 rounded shadow-lg">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onMouseEnter={() => setHoveredCategory(category.id)}
                    className="p-2 border-b hover:bg-gray-200 cursor-pointer"
                  >
                    {category.name}
                  </div>
                ))}
              </div>

              {/* Subcategory List */}
              <div className="w-2/3 bg-white p-4 rounded shadow-lg">
                {categories.map((category) =>
                  category.id === hoveredCategory ? (
                    <div key={category.id}>
                      <h3 className="font-bold mb-2">{category.name}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {category.subcategories.map((subcategory) => (
                          <div
                            key={subcategory.id}
                            className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
                          >
                            {subcategory.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly flex-grow md:pl-12 py-5">
          <div>
            <Link to="/" className="text-gray-200 hover:text-white transition">
              Home
            </Link>
          </div>
          <div>
            <Link to="/shop" className="text-gray-200 hover:text-white transition">
              Shop
            </Link>
          </div>
          <div className="capitalize">
            <Link to="/product" className="text-gray-200 hover:text-white transition">
              Product
            </Link>
          </div>
          <div className="capitalize">
            <Link to="#" className="text-gray-200 hover:text-white transition">
              Contact Us
            </Link>
          </div>
          <div className="capitalize">
            <Link to="/login" className="text-gray-200 hover:text-white transition">
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
