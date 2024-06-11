import { Link } from "react-router-dom"



const MyReport = ()=>{


    return(
    
        <div className="flex h-screen">
        {/* <!-- Sidebar --> */}
        <aside className="bg-white w-1/4 p-6 shadow-lg">
            <div className="text-lg font-semibold mb-4">Report Center</div>
            <ul>
            <li className="mb-2">
                            <Link to="/submitreport" className="block text-orange-500 font-semibold">Submit a Report</Link>
                        </li>
                        <li>
                            <Link to="/myreport" className="block text-gray-800">My Reports</Link>
                        </li>
             </ul>
        </aside>
        {/* <!-- Main Content --> */}
        <main className="flex-1 p-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between border-b pb-4 mb-4">
                    <div className="flex space-x-4">
                        <div className="text-gray-700">Case category</div>
                        <div className="text-gray-700">Case status</div>
                        <div className="text-gray-700">Time</div>
                    </div>
                </div>
                <div className="text-center text-gray-500">
                    No case record under current filter, you could search for other time period, case status or category.
                </div>
            </div>
        </main>
    </div>
        
    )
    
    }
    
    export default MyReport