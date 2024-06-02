import { Link } from "react-router-dom";
import Sidebar from "../../../component/sidebar/sidebar";




const Wallet = () => {



  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      {/* // <!-- Main Content --> */}
      <div className="flex-1 bg-white p-6 shadow-md">

        {/* <!-- Payment Section --> */}
        <div className="mb-6 flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-700">Payment</h2>
          <Link to="/settings" className="text-gray-500 hover:text-red-500">Settings</Link>
        </div>

        {/* <!-- My Bonus Section --> */}
        <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-700">My Bonus</h3>
            <Link to="#" className="text-gray-500 hover:text-red-500">Records</Link>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-semibold text-gray-700">Total <span className="text-xl">NGN 0.00</span></p>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex flex-col">
              <span className="text-gray-500">Available</span>
              <span className="text-xl text-gray-700">NGN 0.00</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Pending</span>
              <span className="text-xl text-gray-700">NGN 0.00</span>
            </div>
          </div>
          <div className="mt-4 text-gray-500">
            You can use Bonus towards purchases. <Link to="#" className="text-red-500">Learn more</Link>.
          </div>
        </div>
        {/* 
      <!-- Cards Section --> */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Cards</h3>
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
            <button className="text-gray-500 flex items-center space-x-2">
              <span className="text-2xl">+</span>
              <span>Add new card</span>
            </button>
          </div>
          <p className="mt-4 text-gray-500">No cards saved. Add one below to get started.</p>
        </div>

      </div>

    </div>
  )

}

export default Wallet;

