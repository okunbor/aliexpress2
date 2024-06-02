import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
                <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                    <h1 className="text-lg font-semibold text-gray-900">Account</h1>
                </div>
                <nav className="px-4 py-6 space-y-2">
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold bg-gray-200 rounded-lg" to="/account">Overview</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/orders">Orders</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/wallet">Payment</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/refund">Refund and return</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/feedback">Feedback</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/settings">Settings</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/shippingAddress">Shipping address</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/messageCenter">Message center</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/share">Invite friends</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/helpCenter">Help center</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="manageReport">Manage reports</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/suggestion">Suggestion</Link>
                    <Link className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg" to="/dsCenter">DS Center</Link>
                </nav>
            </div>
  );
}

export default Sidebar;
