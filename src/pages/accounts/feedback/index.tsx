import Sidebar from "../../../component/sidebar/sidebar";


const Feedback  = () =>{

return(


    <div className="flex flex-col md:flex-row min-h-screen">
         <Sidebar/>
        <div className=" flex-1 p-6 bg-white rounded shadow-md ">
            <h1 className="text-xl font-semibold mb-4">Manage Feedback</h1>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
                <p className="font-bold">Guidelines</p>
                <ul className="list-disc ml-5">
                    <li>You can leave feedback for sellers within 30 days in "Orders Awaiting My Feedback".</li>
                    <li>Feedback will be published when both you and the seller have left feedback, or at the end of the 30 days.</li>
                    <li>Learn more about our Feedback Rating Policies</li>
                </ul>
            </div>

            <div className="flex mb-4">
                <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-l focus:outline-none">Orders Awaiting My Feedback (0)</button>
                <button className="bg-white border-t border-r border-b text-gray-800 font-semibold py-2 px-4 focus:outline-none">Reviews About You</button>
                <button className="bg-white border-t border-r border-b text-gray-800 font-semibold py-2 px-4 rounded-r focus:outline-none">Reviews By You</button>
            </div>

            <div className="flex items-center mb-4">
                <label htmlFor="orderNo" className="mr-2">Order No:</label>
                <input id="orderNo" type="text" className="border border-gray-300 rounded px-2 py-1 mr-2"/>
                <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded focus:outline-none">Search</button>
            </div>

            <div className="bg-white rounded shadow-md p-4">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Order Details</th>
                            <th className="py-2">Feedback</th>
                            <th className="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-t px-4 py-2" colSpan={3}>No orders waiting for feedback</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)

}

export default Feedback;