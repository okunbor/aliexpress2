// import { Minus, Plus, X } from "react-icons";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../../app/slices/cartSlice";
import CartProduct from "../../../types/CartProducts";
import { Link } from "react-router-dom";

import { TbHeartStar } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { addToWishList } from "../../../app/slices/wishlistSlice";
import toast from "react-hot-toast";

interface CartItemCardProps {
  product: CartProduct;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const onIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const onDecreaseQuantity = (productId: number) => {
    dispatch(decreaseQuantity({ id: productId }));
  };

  const onRemoveItem = (productId: number) => {
    dispatch(removeItem({ id: productId }));
  };

  const onAddToWishList = (product: CartProduct) => {
    dispatch(addToWishList (product));
    toast.success("Added to wishlist", {
      position: "top-center",
      className: "bg-red-500"
    });

    alert("added to wshlist")
    
    onRemoveItem( product.id)
  };

  return (
   
    <div className="space-y-6">
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link to={`/product/${product.id}`} className="shrink-0 md:order-1">
          <img className="h-20 w-20 dark:hidden" src={product.thumbnail} alt={product.title} />
        </Link>
  
        <div className="w-1/2 min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link to="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">
            {product.title}
          </Link>
          <div className="flex items-center gap-4">
            <button
              type="button"   
              onClick={() =>  onAddToWishList( product) }
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
            >
              
              <TbHeartStar />
              Add to Favorites
            </button>
  
            <button
              type="button"
              onClick={() => onRemoveItem(product.id)}
              title="Remove item from cart"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
            >
      
              <RxCross2 />
              Remove
            </button>
          </div>
        </div>
  
        <div className="flex items-center space-x-4  md:order-3 md:justify-end">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              id="decrement-button"
              onClick={() => onDecreaseQuantity(product.id)}
              title="Decrease Quantity"
              className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              
            
              
              <FaMinus />
            </button>
            <input
              type="text"
              id="counter-input"
              value={product.quantity}
              readOnly
              className="w-10 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
            />
            <button
              type="button"
              id="increment-button"
              onClick={() => onIncreaseQuantity(product.id)}
              title="Increase Quantity"
              className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
             
              <FaPlus />
            </button>
          </div>
          <div className="text-right">
            <p className="text-base font-bold text-gray-900 dark:text-white">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  

       


  );
};

export default CartItemCard;
