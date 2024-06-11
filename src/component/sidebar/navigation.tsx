import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (

        <nav className="px-4 py-6 space-y-2">
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                        : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
                }
                to="/account"
            >
                Overview
            </NavLink>



            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/orders">Orders</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/wallet">Payment</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/refund">Refund and return</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/feedback">Feedback</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/settings">Settings</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/shippingAddress">Shipping address</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/messageCenter">Message center</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/share">Invite friends</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/helpCenter">Help center</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/manageReport">Manage reports</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/suggestion">Suggestion</NavLink >
            <NavLink className={({ isActive }) =>
                isActive
                    ? "block px-4 py-2 mt-2 text-sm font-semibold bg-gray-300 text-gray-900 rounded-lg"
                    : "block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200 rounded-lg"
            } to="/dsCenter">DS Center</NavLink >





        </nav>
    )

}

export default Navigation;