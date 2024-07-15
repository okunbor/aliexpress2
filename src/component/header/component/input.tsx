import { useState } from "react";
import { FiSearch } from "react-icons/fi"
import { useNavigate,  } from "react-router-dom"



const Input : React.FC = () =>{

  
  const [isName, setIsName] = useState("");
 

  
  const navigate = useNavigate();
  const handleSearch = () =>{

       
    navigate(`/search/${isName}`)
  
  }

return(
    <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="swimsuit 2024"
                    className=" ml-5  py-1 px-2 w-full h-10 rounded-full border border-gray-600 bg-gray-100 text-black"
                    onChange={(e) => setIsName(e.target.value)}
                  />
                  <button onClick={handleSearch} className="absolute top-1 right-0 h-8 rounded-full bg-gray-950 text-white px-4">
                    <FiSearch />
                  </button>

    </div>
)

}

export default Input