import { Link } from "react-router-dom";
import Sidebar from "../overview/sidebar";





const OrderPage = () => {



    return(

 <div className="flex min-h-screen">
   <Sidebar/>
    <div className="flex-1 bg-white p-6 shadow-md">

        {/* <!-- Order Tabs --> */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4">
            <Link to="#" className="py-4 px-1 border-b-2 font-medium text-sm text-red-600 border-red-500">View All</Link>
            <Link to="#" className="py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">To Pay (0)</Link>
            <Link to="#" className="py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">To Ship (0)</Link>
            <Link to="#" className="py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">Shipped (0)</Link>
            <Link to="#" className="py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">Processed</Link>
          </nav>
        </div>
  
        {/* <!-- Search Bar --> */}
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-md p-2">
              <option>Order</option>
            </select>
            <input type="text" placeholder="Order ID, product or store name" className="border border-gray-300 rounded-md p-2 w-72"/>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Search</button>
          </div>
          <div>
            <select className="border border-gray-300 rounded-md p-2">
              <option>All / Last year</option>
            </select>
          </div>
        </div>
  
        {/* <!-- No Orders Message --> */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="text-gray-400 text-5xl mb-4">
            📄
          </div>
          <div className="text-gray-500">
            No orders yet. Please <Link to="#" className="text-red-500">switch account</Link> or <Link to="#" className="text-red-500">feedback</Link>.
          </div>
        </div>
  
    </div>

  </div>  

    )
}

export default OrderPage;