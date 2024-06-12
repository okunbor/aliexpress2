

import { useState } from "react";
import Form from "./component/form";
import OrderSummary from "./component/orderSummary";
import PaymentCard from "./component/paymentCard";
import ShippingAddress from "./component/shipAddress";
import CardModal from "./component/cardModal";






const CheckTemplate = ()=>{

    const [isAdding, setIsAdding] = useState(false);

    const [isCard ,setIsCard] = useState(false)

    const handleAddForm = () => {
      setIsAdding(true);
    };
  
    const handleCancel = () => {
      setIsAdding(false);
    };

    const handleAddCart = () => {
        setIsCard(true);
      };
    
      const handleCancelCard = () => {
        setIsCard(false);
      };

    return (

<>

    {/* <!-- wrapper --> */}
    <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
       
       {/* form space */}

       <div className="col-span-8">

       {isAdding ? (
           <Form onAddressForm={handleCancel} />
           ) : (
               <ShippingAddress onAddShipping={handleAddForm} />
        )}

    
       {isCard ?  (
        <CardModal onAddCard={handleCancelCard}/>
    ):(
           <PaymentCard onCancelCard ={ handleAddCart}/>
       
       )

       }

       </div>

   

        <OrderSummary/>
        

     </div>
</>
    )
}

export default CheckTemplate;