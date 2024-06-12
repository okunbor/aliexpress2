import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CartItemCard from "../cart/component/CartItems";
import RelatedProduct from "../product/RelatedProduct";
import OrderSummary from "../cart/component/OrderSummary";
import Header from "../../component/header/header";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footers/footer";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  if (cartItems && cartItems.length < 1) {
    return (
      <>
        <Header />
        <Navbar />
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        {/* <div className="mx-auto max-w-screen-xl px-4 2xl:px-0"> */}
        <h2 className="text-xl ml-6 font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-6 w-screen  md:max-w-2xl :max-w-4xl">
            no products in cart
          </div>

          {/* Sidebar order summary in cart folder */}
          <OrderSummary />
        </div>

        {/* Related products in product folder */}
        
        {/* </div> */}
      </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Navbar />

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        {/* <div className="mx-auto max-w-screen-xl px-4 2xl:px-0"> */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
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

      <Footer />
    </>
  );
};

export default Cart;
