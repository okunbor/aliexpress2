import { Link } from "react-router-dom"


const SubmitReport = ()=>{


return(

    <div className="container mx-auto p-4">
        <div className="flex">
            {/* <!-- Sidebar --> */}
            <div className="w-1/4 bg-white rounded shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Report Center</h2>
                <nav>
                    <ul>
                        <li className="mb-2">
                            <Link to="/submitreport" className="block text-orange-500 font-semibold">Submit a Report</Link>
                        </li>
                        <li>
                            <Link to="/myreport" className="block text-gray-800">My Reports</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* <!-- Main Content --> */}
            <div className="w-3/4 ml-4">
                <div className="bg-white rounded shadow-md p-4">
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                        <p className="font-bold">Please describe the situation as clearly and objectively as possible. All reports will remain anonymous and will be processed by AliExpress as soon as possible. Please do not re-submit your report(s).</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Intellectual Property Complaint (For Rights Holders)</h3>
                        <p className="mb-4">If you are intellectual property rights holders, including copyright (pictures, artworks, etc.), portrait rights, trademark rights, and believe that the product infringes on your rights, please submit complaints on IPP Platform.</p>
                        <hr className="mb-4"/>
                        <h3 className="text-lg font-semibold mb-2">Report (For Non-Rights Holders)</h3>
                        <p className="mb-4">If you are not the owner of the intellectual property rights but would like to report a case of a party infringing on another trademark, please click on the button below to file a complaint.</p>
                        <hr className="mb-4"/>
                        <h3 className="text-lg font-semibold mb-2">Restricted or Prohibited Products</h3>
                        <p className="mb-4">The seller has listed products that are restricted, prohibited or not suitable for delivery. Product Safety or Compliance.</p>
                        <hr className="mb-4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

}

export default SubmitReport