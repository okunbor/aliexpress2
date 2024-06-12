import { FaShoppingCart } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";


const CartValue = ()=>{
    
    const cartItems = useSelector((state: RootState) => state.cart.cart);
    const cartCount = cartItems.length ;
return (
<>
{ cartCount > 0 ?  
    <Link
       to="/cart"  >

   <div className="relative  ">
   <FiShoppingCart className="w-10 h-10    text-white " />                    
   <div className="-top-2 start-7 text-center  absolute font-bold  w-6 h-6  text-black bg-white   rounded-lg">{cartCount}</div>
   </div>

       </Link>
   : 
   
   
   <div className="mx-4">
     <Link
       to="/cart"
       className="flex items-center text-white"
     >
       <span className="mr-1">
         <FaShoppingCart />
       </span>
       <div>
         <b className="block">Cart</b>
         <span className="text-xs">{cartCount}</span>
       </div>
      
     </Link>
   </div>
   }

</>
)

}

export default CartValue