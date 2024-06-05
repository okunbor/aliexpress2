
import Navigation from "./navigation";


const Sidebar = () => {
  return (
    <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
                <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                    <h1 className="text-lg font-semibold text-gray-900">Account</h1>
                </div>
                <Navigation/>
            </div>
  );
}

export default Sidebar;
