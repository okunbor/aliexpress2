import { FaRegHeart, } from "react-icons/fa";

import { RiCoupon3Line } from "react-icons/ri";

import { Link } from "react-router-dom";
const Header = () => {
    return (


        <div className="flex-grow bg-white p-6">
            <div>
                <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                        <span className="text-xl">0</span>
                    </div>
                    <div className="ml-3">
                        <h2 className="text-xl font-semibold">Okunbor Moses</h2>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link to="/wishlist" className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <FaRegHeart className="w-12 h-12 text-red-700 " />
                        <span className="mt-2">Wishlist</span>
                    </Link>
                    <Link to="/coupon" className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <RiCoupon3Line className="w-12 h-12 text-red-700 " />
                        <span className="mt-2">Coupons</span>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Header;
