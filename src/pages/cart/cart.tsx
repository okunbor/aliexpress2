// src/components/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';


const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="fixed top-0 right-0 p-4 w-64 h-full bg-white shadow-lg">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? 
        <p>No items in cart</p>
       : (
        cartItems.map((item, index) => (
          <div key={index} className="border-b mb-4 pb-2">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
            <h3 className="text-lg">{item.title}</h3>
            <p>{item.price}$</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
