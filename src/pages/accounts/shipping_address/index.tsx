
import Sidebar from "../overview/sidebar";
import AddressForm from "./addressForm";
import { useState } from "react";
import AddressCard from "./addressCard";


const ShippingAddress = () => {


    const [isAdding, setIsAdding] = useState(false);

    const handleAddNew = () => {
      setIsAdding(true);
    };
  
    const handleCancel = () => {
      setIsAdding(false);
    };

return(

<div className="flex flex-col md:flex-row min-h-screen">
<Sidebar/>
    
    {/* // <!-- Main Content --> */}
   {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Shipping address</h1>
        {isAdding ? (
          <AddressForm onCancel={handleCancel} />
        ) : (
          <AddressCard onAddNew={handleAddNew} />
        )}
      </div>
</div>
)
}

export default ShippingAddress;