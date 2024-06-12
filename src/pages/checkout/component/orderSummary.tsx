
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import CartProduct from "../../../types/CartProducts";
import CartItems from "../component/checkItems";
import PlaceOrderButton from "../component/placeOrderBtn";


const getTotal = (cartItem: CartProduct[]) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.forEach((item) => {
      totalQuantity += item.quantity!;
      totalPrice += item.price! * item.quantity!;
    });
    return { totalPrice, totalQuantity };
  };
  

const OrderSummary= () => {


    const cartItem = useSelector((state: RootState) => state.cart.cart);

    const quantity = getTotal(cartItem).totalQuantity;
    const price = getTotal(cartItem).totalPrice;
    return(
        <div className="col-span-4 border   border-gray-200 p-4 rounded">
            <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
            <div className="space-y-2">
             

                {cartItem?.map((item) => (
                <CartItems key={item.id} product={item} />
                ))}
               
            </div>

            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                <p>total Item(s)</p>
                <p>{quantity}</p>
            </div>

            <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                <p>shipping</p>
                <p>Free</p>
            </div>

            <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                <p className="font-semibold">Total</p>
                <p>${price}</p>
            </div>

            <div className="flex items-center mb-4 mt-2">
                <input type="checkbox" name="aggrement" id="aggrement"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"/>
                <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <Link to="/termConditions"
                        className="text-primary">terms & conditions</Link></label>
            </div>

            <PlaceOrderButton/>


        </div>
    )
}




export default OrderSummary;