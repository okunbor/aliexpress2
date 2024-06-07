// src/components/PlaceOrderButton.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { usePlaceOrderMutation } from '../../app/services/orderApi';
import toast from 'react-hot-toast';

const PlaceOrderButton: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
//   const [placeOrder, { isLoading, isError, error, data }] = usePlaceOrderMutation();
   const [placeOrder, { isLoading, isError, error }] = usePlaceOrderMutation();

  const handlePlaceOrder = async () => {
    try {
      const result = await placeOrder({ cart, totalAmount }).unwrap();
      if (result) {
        window.location.href = result.paymentUrl || "google.com"; // Redirect to the payment gateway
      }
    } catch (err) {
      toast('Failed to place order:', err);
    }
  };

  return (
    <>
    
    <button onClick={handlePlaceOrder} disabled={isLoading} className="block w-full py-3 px-4 text-center text-white bg-red-500 border border-primary rounded-md hover:bg-transparent hover:text-red-400 transition font-medium">
      {isLoading ? 'Placing Order...' : 'Place Order'}
    </button>
      {isError && <div>{'Failed to place order'}</div>}
  
    </>
  );
};

export default PlaceOrderButton;
