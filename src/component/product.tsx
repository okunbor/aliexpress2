import toast from 'react-hot-toast';

import { FaShoppingCart } from "react-icons/fa";
import React from "react";
// import ProductType from "../types/ProductType";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";
import { MdStarRate } from "react-icons/md";

import { TbHeartDollar } from "react-icons/tb";
import { Link } from 'react-router-dom';
import CartProduct from '../types/CartProducts';
import { addToWishList } from '../app/slices/wishlistSlice';
interface ProductCardProps {
  product: CartProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const onAddToCart = (product: CartProduct) => {
    dispatch(addToCart(product));
    toast.success("Added to cart", {
      position: "top-center",
      className: "bg-red-500"
    });

    alert("added to cart")
    
  };

  const onAddToWishList = (product: CartProduct) => {
    dispatch(addToWishList (product));
    toast.success("Added to wishlist", {
      position: "top-center",
      className: "bg-red-500"
    });

    alert("added to wshlist")
    
  };


  return (
   

<div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
        <Link to={`/product/${product.id}`}>
            <img  src={product.thumbnail} alt={product.title} className="object-contain h-48 w-96"/>
          
          </Link>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end 
            justify-end gap-2 transition">
                <button  onClick={() => onAddToCart(product)}
                    className="text-white text-lg w-9 h-8 rounded-full bg-rose-500 flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to cart">
                    <FaShoppingCart />
                </button>
                <button 
                    onClick={() => onAddToWishList(product)}
                    className="text-white   bg-rose-500  text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist">
                  <TbHeartDollar />
                  </button>
            </div>
        </div>
        <div className="pt-4 pb-3 px-4">
        <Link to={`/product/${product.id}`}>
                <p className=" truncate uppercase font-normal text-sm mb-2 text-gray-800 hover:text-primary transition">

                {product.title}
                </p>
          </Link>
            <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">${product.price}</p>
                <p className="text-sm text-gray-400 line-through">${product.price}</p>
            </div>
            <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                             <MdStarRate  />
                              <MdStarRate/>
                              <MdStarRate/>
                              <MdStarRate/>
                              <MdStarRate/>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
            </div>
        </div>

        
    </div>
      

  );
};

export default ProductCard;
