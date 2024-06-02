import { Link } from "react-router-dom";
import Sidebar from "../../../component/sidebar/sidebar";



const Settings = () => {

    return(

        <div className="flex flex-col md:flex-row min-h-screen">
         <Sidebar/>
        <div className="flex-1 p-6">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>
            <div className="bg-white shadow rounded p-4 mb-6">
                <div className="space-y-4">
                    <h2 className="text-lg font-medium">Personal information</h2>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-blue-500 hover:underline">Upload picture</Link>
                        <Link to="#" className="text-blue-500 hover:underline">Edit profile</Link>
                        <Link to="#" className="text-blue-500 hover:underline">Country/region</Link>
                    </div>
                </div>
                <div className="space-y-4 mt-6">
                    <h2 className="text-lg font-medium">Security Information</h2>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-blue-500 hover:underline">Change email address</Link>
                        <Link to="#" className="text-blue-500 hover:underline">Change password</Link>
                        <Link to="#" className="text-blue-500 hover:underline">Set security question</Link>
                    </div>
                </div>
                <div className="space-y-4 mt-6">
                    <h2 className="text-lg font-medium">Activate email notifications</h2>
                    <Link to="#" className="text-blue-500 hover:underline">Activate</Link>
                </div>
                <div className="space-y-4 mt-6">
                    <h2 className="text-lg font-medium">Social media accounts</h2>
                    <div className="flex space-x-4">
                        <Link to="#" className="flex items-center space-x-2 text-blue-500 hover:underline">
                            <img src="https://www.freepnglogos.com/uploads/facebook-messenger-logo-png-0.png" alt="Messenger" className="h-5 w-5"/>
                            <span>Link</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Settings;