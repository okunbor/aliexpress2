import { Popover } from "flowbite-react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/products/product1.jpg"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


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


  const auth = useSelector((state: RootState) => state.auth);
console.log(auth.isAuthenticated)
 const options = (
   <div className=" text-xl text-gray-500 bg-white pt-3 overflow-auto h-96     ">
     {/* <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 ">
        <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
      </div> */}
  {auth.isAuthenticated ?
   (

     <div className="flex items-center    ">


      <div className="rounded-full overflow-hidden h-24 w-24 items-center ">
       <img src={img1} className=" rounded-full h-24 w-24 "/>

      </div>
       <div className=" flex flex-col ">
         <strong>Andrew Alfred</strong>
        <p className="bg-gray-100">
        <Link to="/logout" className="" >Sign Out</Link>
      
          </p> 
       </div>
     </div>
  ):
  (
<div className="flex items-center    ">


{/* <div className="rounded-full overflow-hidden h-24 w-24 items-center ">

</div> */}
 <div className="  ">
   {/* <strong>Account</strong> */}
  <div className=" flex text-center py-5 ps-1 border-y-8 ">
  <Link to="/login" className=" " >Account/Sign In</Link>

    </div> 
 </div>
</div>
  )}  
    

     <div className="px-3 py-2 rounded-xl">
       {Object.entries(content).map(([key, value]) =>{ 
      
        
        return (
        //  <p className="py-4 font-semibold" >
          //  {" "}
           <Link key={key} className="py-4 font-semibold block"  to={key}>{value}</Link>
          //  {" "}
        //  </p>
       )})}
     </div>
   </div>
 );

  return (

    <Popover content={options} className=" bg-rose-500"  trigger="hover">
                       
    <span className="text-xs">Account</span>

   </Popover>

  )
};

export default UserOptions;        