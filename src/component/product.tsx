

import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import ProductType from "../../types/ProductType";
// import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
import { MdStarRate } from "react-icons/md";

import { TbHeartDollar } from "react-icons/tb";
interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const onAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    // toast.success("Added to cart");
    alert("added to cart");
  };

  return (
   

<div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
            <img  src={product.image} alt={product.title} className="object-contain h-48 w-96"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end 
            justify-end gap-2 transition">
                <button  onClick={() => onAddToCart(product)}
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to cart">
                    <FaShoppingCart />
                </button>
                <button 
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist">
                  <TbHeartDollar />
                  </button>
            </div>
        </div>
        <div className="pt-4 pb-3 px-4">
            <a href="#">
                <p className="uppercase font-normal text-sm mb-2 text-gray-800 hover:text-primary transition">

                {product.title}
                </p>
            </a>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">${product.price}</p>
                <p className="text-sm text-gray-400 line-through">${product.price}</p>
            </div>
            <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                             <MdStarRate className="" />
                              <MdStarRate/>
                              <MdStarRate/>
                              <MdStarRate/>
                              <MdStarRate/>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
            </div>
        </div>
        <a href="#"
             onClick={() => onAddToCart(product)}  className="block  opacity-0 hover:opacity-100 w-full py-1 text-center text-white bg-primary border border-primary rounded-b  transition">Add
            to cart  </a>
    
    </div>
      

  );
};

export default ProductCard;
