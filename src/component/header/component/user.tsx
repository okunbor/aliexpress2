import { AiOutlineUserAdd } from "react-icons/ai"
import UserOptions from "../userOptions"

import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";





const User  = ()=>{


  const auth = useSelector((state: RootState) => state.auth);

return (

    <div className="mx-4">
    <div className="flex items-center">
      <span className="text-white mx-1">
        <AiOutlineUserAdd />
      </span>
       {auth.isAuthenticated?
       (
     <div className="text-white">
          <b className="block text-xs">Hi, Okunbor</b>
       
        <UserOptions/>

      </div>
       )    :  (

        <div className="text-white">
          <b className="block text-xs">Sign In</b>
       
        <UserOptions/>

      </div>
       ) }
      
    </div>
  </div>
)

}

export default User