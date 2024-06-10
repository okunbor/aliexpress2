import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/home";
import Shop from "./pages/shop/shop";
import Checkout from "./pages/checkout/checkout";


import Register from "./pages/login_signup/register";

import Login from "./pages/login_signup/login";
import Cart from "./pages/cart/cart";
import Overview from "./pages/accounts/overview";
import OrderPage from "./pages/accounts/orders";
import Wallet from "./pages/accounts/payment";
import ReturnRefund from "./pages/accounts/return_refund";
import Settings from "./pages/accounts/settings";
import ShippingAddress from "./pages/accounts/shipping_address";
// import Component from "./pages/test/index";
import NotFound from "./pages/404/notFound";
import ToPayPage from "./pages/accounts/orders/pages/topay";
import ToShippedPage from "./pages/accounts/orders/pages/toshipped";
import ShippedPage from "./pages/accounts/orders/pages/shipped";
import ProcessPage from "./pages/accounts/orders/pages/proceesed";
import ProductDetail from "./pages/product/products";
import WishList from "./pages/accounts/wishlist";




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/about" element={<About />} /> */}
       
        {/* <Route path="/contact" element={<Contact />} /> */}
        
        {/* <Route path="/test/:id" element={<Component />} /> */}
        {/* <Route path="/test" element={<Component />} /> */}

        <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/product" element={<Products />} /> */}
       
       {/* settings routes */}
          <Route path="/account" element={<Overview />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/refund" element={<ReturnRefund />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/shippingAddress" element={<ShippingAddress />} />


          <Route path="/wishlists" element={<WishList/>} />
          <Route path="/to_pay" element={<ToPayPage />} />
          <Route path="/to_ship" element={<ToShippedPage />} />
          <Route path="/shipped" element={<ShippedPage />} />
          <Route path="/processed" element={<ProcessPage />} />


          <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/payment" element={<Payment2 />} />
        <Route path="/paymentDone" element={<PaymentDialogue />} /> */}
        {/* <Route
          path="/register"
          element={isLoggedIn ? <Home /> : <Register />}
        /> */}
          
          <Route
          path="/register"
          element={<Register />}
        />
        {/* <Route path="/about_ceo" element={<CEO />} /> */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
