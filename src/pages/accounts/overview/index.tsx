import Header from "./header";
import Orders from "./orders";
import Sidebar from "./sidebar";


function Overview() {
  return (
    <div className="min-h-screen flex flex-col">
        
        <div className="flex flex-col md:flex-row md:min-h-screen">
           <Sidebar/>

           <div className="flex flex-col w-full">

            <Header/>
            <Orders/>
           </div>


        </div>
     </div>   
  );
}

export default Overview;
