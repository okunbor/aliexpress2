
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../reducers/cart/cartSlice";

import axios from "axios";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";


import { MdStarRate } from "react-icons/md";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make a GET request to the ecommerce products API
        const response = await axios.get("https://fakestoreapi.com/products");
        // Set the products state with the response data
        setProducts(response.data);
      } catch (error: any) {
        // If an error occurs, set the error state
        setError(error);
      } finally {
        // Set loading to false, regardless of whether there was an error or not
        setLoading(false);
      }
    };

    // Call the fetchProducts function when the component mounts
    fetchProducts();
  }, []);


  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    // <!-- product -->
    <>
      <BrowserView>
        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            Recommended for you
          </h2>
          <div className="grid grid-cols-5  gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-fit"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition duration-300">
                    <a
                      href="#"
                      className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      title="View product"
                    >
                      {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      title="Add to wishlist"
                    >
                      {/* <i className="fa-solid fa-heart"></i> */}
                    </a>
                  </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                  <a
                    href="#"
                    className="block text-sm font-thin text-gray-800 hover:text-primary transition"
                  >
                    {product.title}
                  </a>
                  <div className="flex items-baseline mt-1">
                    <p className="text-lg text-primary font-semibold">
                      ${product.price}
                    </p>
                    <p className="ml-2 text-sm text-gray-500 line-through">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex gap-1 text-sm text-yellow-400">
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                    </div>
                    <div className="text-xs text-gray-500 ml-3">(150)</div>
                  </div>

                  <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
                  {/* <a
                    href="#"
                    className="block w-full py-2 text-center text-white bg-primary border border-primary rounded-md mt-4 hover:bg-transparent hover:text-primary transition duration-300"
                  >
                    Add to cart
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="container pb-16">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            recomended for you
          </h2>
          <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-fit"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition duration-300">
                    <a
                      href="#"
                      className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      title="View product"
                    >
                      {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                    </a>
                    <a
                      href="#"
                      className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      title="Add to wishlist"
                    >
                      {/* <i className="fa-solid fa-heart"></i> */}
                    </a>
                  </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                  <a
                    href="#"
                    className=" text-sm text-gray-800 font-thin hover:text-primary transition"
                  >
                    {product.title}
                  </a>
                  <div className="flex items-baseline mt-1">
                    <p className="text-lg text-primary font-semibold">
                      ${product.price}
                    </p>
                    <p className="ml-2 text-sm text-gray-500 line-through">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex gap-1 text-sm text-yellow-400">
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                    </div>
                    <div className="text-xs text-gray-500 ml-3">(150)</div>
                  </div>
                  {/* <a
                    href="#"
                    className="block w-full py-2 text-center text-white bg-primary border border-primary rounded-md mt-4 hover:bg-transparent hover:text-primary transition duration-300"
                  >
                    Add to cart
                  </a> */}
                
                <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default Product;
