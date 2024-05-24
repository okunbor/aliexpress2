import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/home";
import Shop from "./pages/shop/shop";
import Checkout from "./pages/checkout/checkout";

import Account from "./pages/account/account";
import Register from "./pages/login_signup/register";
import Products from "./pages/product/products";
import Login from "./pages/login_signup/login";
import Cart from "./pages/cart/cart";



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
      
          <Route path="/profile" element={<Account />} />
          <Route path="/product" element={<Products />} />
       
    
       
        
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
        {/* <Route path="/about_ceo" element={<CEO />} />
        <Route path="/search" element={<Search_Page />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
