import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="flex-shrink-0 w-full bg-white shadow-md p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                                <span className="text-xl">0</span>
                            </div>
                            <div className="ml-3">
                                <h2 className="text-xl font-semibold">Okunbor Moses</h2>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Link to="/wishlist" className="text-gray-600 hover:text-gray-900">Wish List</Link>
                            <Link to="/follwing" className="text-gray-600 hover:text-gray-900">Following</Link>
                            <Link to="#" className="text-gray-600 hover:text-gray-900">Viewed</Link>
                            <Link to="/coupons" className="text-gray-600 hover:text-gray-900">Coupons</Link>
                        </div>
                    </div>
                </div>
  );
}

export default Header;
