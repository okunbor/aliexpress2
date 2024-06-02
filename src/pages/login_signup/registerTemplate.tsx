
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/slices/authSlice";
import { AppDispatch ,RootState } from "../../redux/store";
import { Link, useNavigate } from "react-router-dom";






const RegisterTemplate: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const handleSignup = () => {
      const result =   dispatch(userSignup({
            email, 
            password,
            name
        }));

        if (userSignup.fulfilled.match(result)) {

            navigate(-1)
        }
    };


    return (
        <div className="contain py-16">
       
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
            <p className="text-gray-600 mb-6 text-sm">
                Register For new cosutumer
            </p>
            <form action="#" method="post" autoComplete="on">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="name" className="text-gray-600 mb-2 block">Full Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="fulan fulana"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                    <div>
                        <label htmlFor="confirm" className="text-gray-600 mb-2 block">Confirm password</label>
                        <input type="password" name="confirm" id="confirm" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                        <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <Link
                                to="#" className="text-primary">terms & conditions</Link></label>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit"  onClick={handleSignup}
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                        account</button>
                </div>
            </form>

            {/* <!-- login with  google or facebook --> */}
            <div className="mt-6 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div className="mt-4 flex gap-4">
                <button
                    className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</button>
                <button
                    className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</button>
            </div>
            {/* <!-- ./login with --> */}

            <p className="mt-4 text-center text-gray-600">Already have account? <Link to="/login"
                    className="text-primary">Login now</Link></p>
        </div>
        {auth.error && <p>{auth.error}</p>}
    </div>
      )

}
export default RegisterTemplate;