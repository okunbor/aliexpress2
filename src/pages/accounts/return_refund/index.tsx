import Sidebar from "../../../component/sidebar/sidebar";


const ReturnRefund = () => {


    return (
<div className="flex flex-col lg:flex-row min-h-screen">  
<Sidebar/>     
 <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Returns/refunds</h1>
        <div className="flex space-x-4 mb-4">
            <div className="flex items-center text-red-500">
                <span>In progress(0)</span>
            </div>
            <div className="flex items-center">
                <span>Awaiting returns(0)</span>
            </div>
        </div>
        <div className="bg-white shadow rounded p-4 mb-6">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input type="text" placeholder="Order number" className="border border-gray-300 p-2 rounded w-full md:w-1/3"/>
                <input type="text" placeholder="Store name" className="border border-gray-300 p-2 rounded w-full md:w-1/3"/>
                <select className="border border-gray-300 p-2 rounded w-full md:w-1/3">
                    <option value="">All</option>
                    <option value="">In progess</option>
                    <option value="">Awaiting returns</option>
                    <option value="">Complete</option>

                </select>
                <button className="bg-red-500 text-white p-2 rounded w-full md:w-auto">Search</button>
            </div>
        </div>
        <div className="bg-white shadow rounded p-4">
            <table className="w-full">
                <thead>
                    <tr className="text-left">
                        <th className="p-2 border-b">Order information</th>
                        <th className="p-2 border-b">Current status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="p-2 text-gray-500">No results for this term. Please try another.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>     
    )
}


export default ReturnRefund;

