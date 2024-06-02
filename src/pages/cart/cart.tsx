import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItemCard from "../cart/CartItems";
import { Link } from "react-router-dom";
import RelatedProduct from "../product/RelatedProduct";
import OrderSummary from "./OrderSummary";
import Header from "../../component/header/header";
import Navbar from "../../component/navbar";
import Footer from "../../component/footers/footer";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  if (cartItems && cartItems.length < 1) {
    return (
      <>
      <Header />
       <Navbar />
      <div className="h-72 flex flex-col items-center justify-center">
        <h2 className="text-3xl mt-10 mb-5 font-bold">Cart is Empty</h2>
        <Link
          to="/shop"
          className="px-6 py-2 rounded-md text-white bg-orange-500"
        >
          Shop
        </Link>
      </div>
      <Footer/>
      </>  
    );
  }

  return (
 <>
    <Header />
    <Navbar />

<section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  {/* <div className="mx-auto max-w-screen-xl px-4 2xl:px-0"> */}
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-6 w-screen  md:max-w-2xl :max-w-4xl">
        {cartItems?.map((item) => (
          <CartItemCard key={item.id} product={item} />
        ))}
      </div>
      
      {/* Sidebar order summary in cart folder */}
      <OrderSummary />
    </div>

    {/* Related products in product folder */}
    <RelatedProduct />
  {/* </div> */}
</section>


<Footer/>
</>
  );
};

export default Cart;
