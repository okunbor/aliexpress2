import { Link } from "react-router-dom"
import Sidebar from "../../../../component/sidebar/sidebar"
import { BsChatSquareFill } from "react-icons/bs"



const SuggestionHome = ()=>{

return(

    <div className="flex min-h-screen">
        {/* <!-- Sidebar --> */}
     <Sidebar/>

        {/* <!-- Main Content --> */}
        <div className="flex-1 p-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <p className="text-gray-600">This page is to collect your suggestions so we can always improve AliExpress. To receive help with any recent or current problems related to your order, shipment, refund process, etc., please go to <Link to="#" className="text-blue-600">Help Center</Link></p>
                </div>
                <h1 className="text-xl font-semibold mb-4">Any suggestions for us?</h1>
                <p className="text-gray-600 mb-4">Submit your suggestions or feedback here. We read all of them, so we could constantly improve our services.</p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 mb-6">Submit suggestions</button>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Suggestion list</h2>
                    <p className="text-gray-600">You haven't submitted any suggestions yet. We would like to hear from you!</p>
                </div>
            </div>
        </div>

        {/* <!-- Chatbot --> */}
        <div className="absolute bottom-4 right-4">
            <div className="relative">
                <button className="bg-yellow-400  rounded-full p-4 shadow-lg mt-6">
                    {/* <img src="path/to/avatar.png" alt="Eva" className="w-8 h-8"/> */}
                <BsChatSquareFill  className="w-8 h-8 "/>
                </button>
                <div className=" absolute bottom-32 right-32 bg-white shadow-lg rounded-lg p-4 h-20 w-full ">
                    <p className="text-gray-800 font-semibold mb-2 ">Eva</p>

                    <p className="text-gray-800 font-semibold ">Not receive goods</p>

                    <p className="text-gray-800 font-semibold ">Not receive refund</p>

                    <p className="text-gray-800 font-semibold ">Manage my account</p>
                    
                    <p className="text-gray-800 font-semibold ">Reason for order close</p>
                    <p className="text-gray-800 font-semibold ">Ask more</p>

                    {/* <ul className="text-gray-700  ">
                        <li><Link to="#" className=" py-1 hover:bg-gray-200 rounded">Not receive goods</Link></li>
                        <li><Link to="#" className=" py-1 hover:bg-gray-200 rounded">Not receive refund</Link></li>
                        <li><Link to="#" className="py-1 hover:bg-gray-200 rounded">Manage my account</Link></li>
                        <li><Link to="#" className=" py-1 hover:bg-gray-200 rounded">Reason for order close</Link></li>
                        <li><Link to="#" className=" py-1 hover:bg-gray-200 rounded">Ask more</Link></li>
                    </ul> */}
                </div>
            </div>
        </div>
    </div>
)


}

export default SuggestionHome