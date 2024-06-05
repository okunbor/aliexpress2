import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../app/slices/authSlice";
import { AppDispatch, RootState } from "../../app/store";
import { Link, useNavigate } from "react-router-dom";

// username : emilys, password : emilyspass -- for test

const LoginTemplate: React.FC = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const result = await dispatch(userLogin({ username, password }));
        if (userLogin.fulfilled.match(result)) {
            navigate(-1); // Navigate to the previous page
        }
    };

    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    Welcome back customer
                </p>
                <form onSubmit={handleLogin} method="POST" >
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={username}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail@domain.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                            />
                            <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                        </div>
                        <Link to="#" className="text-primary">Forgot password</Link>
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* <!-- login with Google or Facebook --> */}
                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <div className="mt-4 flex gap-4">
                    <button className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">Facebook</button>
                    <button className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">Google</button>
                </div>
                {/* <!-- ./register now  --> */}
                <p className="mt-4 text-center text-gray-600">Don't have an account? <Link to="/register" className="text-primary">Register now</Link></p>
            </div>
            {auth.error && <p>{auth.error}</p>}
        </div>
    );
}

export default LoginTemplate;
