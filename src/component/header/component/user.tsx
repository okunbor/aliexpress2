import { AiOutlineUserAdd } from "react-icons/ai"
import UserOptions from "../userOptions"





const User  = ()=>{

return (

    <div className="mx-4">
    <div className="flex items-center">
      <span className="text-white mx-1">
        <AiOutlineUserAdd />
      </span>
      <div className="text-white">
          <b className="block text-xs">Hi, Okunbor</b>
       
        <UserOptions/>

      </div>
    </div>
  </div>
)

}

export default User