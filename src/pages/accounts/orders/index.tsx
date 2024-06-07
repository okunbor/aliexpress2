import { Link  } from "react-router-dom";
import Sidebar from "../../../component/sidebar/sidebar";
import RelatedProduct from "../../product/RelatedProduct";
import Header from "../../../component/header/header";
import Navbar from "./components/navbar";
import useOrders from '../../../hooks/useAllOrder'; // Assuming useOrders hook is in a separate file





const OrderPage = () => {

  const {
    productId,
    // date,
    productList,
    isLoading,
    error,
    handleProductIdChange,
    handleDateChange,
    handleSearch,
  } = useOrders();

 


return(
<>
<Header/>
 <div className="flex min-h-screen">
   <Sidebar/>
    <div className="flex-1 bg-white p-6 shadow-md">

        {/* <!-- Order Tabs --> */}
        <div className="border-b border-gray-200">
         
          <Navbar/>
        </div>
  
        {/* <!-- Search Bar --> */}
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-md p-2">
              <option>Order</option>
            </select>
            <input type="text"  value={productId}
              onChange={handleProductIdChange} placeholder="Order ID, product or store name" className="border border-gray-300 rounded-md p-2 w-72"/>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleSearch}>Search</button>
          </div>
          <div>
            <select className="border border-gray-300 rounded-md p-2 " onChange={handleDateChange}>
              <option value={"All"}>All / Last year</option>
              <option value={"six_month"}>6 month</option>
              <option value={"one_year"}>1 year</option>
              <option value={"two_years"}>2 year</option>
            </select>
          </div>
        </div>
  
        {/* ... */}
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : productList.length > 0 ? (
          <div>
            products are available
            {/* Render your product list based on productList */}
          </div>
        ) : (

          // No Orders Message 
        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="text-gray-400 text-5xl mb-4">
            📄
          </div>
          <div className="text-gray-500">
            No orders yet. Please <Link to="#" className="text-red-500">switch account</Link> or <Link to="#" className="text-red-500">feedback</Link>.
          </div>
        </div> 
        )}
   g b
    </div>
        
  </div>  
  <RelatedProduct/>
</>

    )
}

export default OrderPage;