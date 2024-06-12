import { Link } from "react-router-dom"


import logo from "../../../assets/images/logo.svg"


const Logo  = () =>{

return(
    <div className="mr-4 bg-red-100">
    <Link
      to="/home"
      className=""
    >
       <img src={logo} alt="logo" className="w-30 bg-red-100 ml-4"/>
     
    </Link>
  </div>
)

}

export default Logo