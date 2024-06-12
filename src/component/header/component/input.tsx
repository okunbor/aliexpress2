import { FiSearch } from "react-icons/fi"



const Input  = () =>{

return(
    <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="swimsuit 2024"
                    className=" ml-5  py-1 px-2 w-full h-10 rounded-full border border-gray-600 bg-gray-100 text-black"
                  />
                  <button className="absolute top-1 right-0 h-8 rounded-full bg-gray-950 text-white px-4">
                    <FiSearch />
                  </button>
    </div>
)

}

export default Input