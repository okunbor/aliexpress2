import { FaUniregistry } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { MdLocalShipping, MdRateReview } from "react-icons/md";
import { PiFoldersFill } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Orders = () => {
    return (
        <div className="flex-grow bg-white p-6">
            <div>
                <h3 className="text-2xl font-semibold">My Orders</h3>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link
                        to="/to_pay"
                        className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        <PiFoldersFill className="w-12 h-12 text-red-700 " />
                        <span className="mt-2">Unpaid</span>
                    </Link>
                    <Link
                        to="/to_ship"
                        className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        <FaUniregistry className="w-12 h-12 text-red-700 " />
                        <span className="mt-2">To be shipped</span>
                    </Link>
                    <Link
                        to="/shipped"
                        className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        <MdLocalShipping className="w-12 h-12 text-red-700 " />
                        <span className="mt-2">Shipped</span>
                    </Link>
                    <Link
                        to="#"
                        className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        <MdRateReview className="w-12 h-12 text-red-700 " />
                        <span className="mt-2">To be reviewed</span>
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-1 ">
                    <Link
                        to="appeal"
                        className="flex items-center text-center p-4  rounded-lg hover:bg-gray-200"
                    >
                        <LuNewspaper />

                        <span className="ml-2">My appeal</span>
                    </Link>
                    <Link
                        to="dispute"
                        className="flex items-center text-center p-4 rounded-lg hover:bg-gray-200"
                    >
                        <RiMoneyDollarCircleLine className="" />
                        <span className="ml-2">In dispute</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Orders;
