import { Popover } from "flowbite-react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/products/product1.jpg"


const  content =  {
   orders:"My Orders",
   message: "Message Center",
   wallet:"Payment",
   wishlists: "Wish List",
   coupons: "My Coupons",
   settings: "Settings",
    business:"Business",
    center:"DS Center",  
    buyerProtection:"Buyer Protection",
    helpCenter:"Help Center",
    DisReports:"Disputes & Reports",


    
}

const UserOptions  = () => {
 const options = (
   <div className=" text-sm text-gray-500 dark:text-gray-400 pt-3 overflow-auto h-96  ">
     {/* <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 ">
        <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
      </div> */}
     <div className="flex items-center    ">
      <div className="rounded-full overflow-hidden h-24 w-24 items-center ">
       <img src={img1} className=" rounded-full h-24 w-24 "/>

      </div>
       <div className=" flex flex-col ">
         <strong>Andrew Alfred</strong>
        <p className="bg-gray-100">
        {/* <Link to="" className="bg-gray-100" >Sign Out</Link> */}
        <a href="http://">Sign out</a>
          </p> 
       </div>
     </div>

     <div className="px-3 py-2 rounded-xl">
       {Object.entries(content).map(([key, value]) =>{ 
      
        
        return (
         <p className="py-4 font-semibold" >
           {" "}
           <Link key={key}  to={key}>{value}</Link>{" "}
         </p>
       )})}
     </div>
   </div>
 );

  return (

    <Popover content={options} placement="bottom" trigger="hover">
                       
    <span className="text-xs">Account</span>

   </Popover>

  )
};

export default UserOptions;        