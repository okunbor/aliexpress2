import Sidebar from "../../../component/sidebar/sidebar";
import RelatedProduct from "../../product/RelatedProduct";



const WishList  = ()=>{

return(
<div className="min-h-screen flex flex-col lg:flex-row">
        {/* <!-- Sidebar --> */}
        <aside className="w-full lg:w-1/4 bg-white p-4 shadow-lg">
         <Sidebar/>
        </aside>

        {/* <!-- Main content --> */}
        <main className="flex-1 p-4">
            {/* <!-- All items --> */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">All items (1)</h2>
                <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-4 shadow-lg rounded-lg">
                    <img src="https://via.placeholder.com/150" alt="Product Image" className="w-full md:w-24 h-24 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"/>
                    <div>
                        <h3 className="text-xl font-bold mb-2">X15Pro TWS Wireless Bluetooth Earphones Stereo 5.0</h3>
                        <p className="text-gray-500">10000+ orders</p>
                        <p className="text-red-500 font-bold">NGN1,471.11 <span className="text-gray-500 line-through">-68% off since added</span></p>
                        <div className="mt-2">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Move to cart</button>
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2">More</button>
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- More to love --> */}
            {/* <div>
                <h2 className="text-2xl font-bold mb-4">More to love</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                   
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <img src="https://via.placeholder.com/150" alt="Product Image" className="w-full h-24 object-cover rounded-lg mb-4"/>
                        <p className="text-gray-700">Product 1</p>
                    </div>
                  
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <img src="https://via.placeholder.com/150" alt="Product Image" className="w-full h-24 object-cover rounded-lg mb-4"/>
                        <p className="text-gray-700">Product 2</p>
                    </div>
                 
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <img src="https://via.placeholder.com/150" alt="Product Image" className="w-full h-24 object-cover rounded-lg mb-4"/>
                        <p className="text-gray-700">Product 3</p>
                    </div>
                   
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <img src="https://via.placeholder.com/150" alt="Product Image" className="w-full h-24 object-cover rounded-lg mb-4"/>
                        <p className="text-gray-700">Product 4</p>
                    </div>
                </div>
            </div> */}
            <RelatedProduct/>
        </main>
    </div>


)

}

export default WishList;