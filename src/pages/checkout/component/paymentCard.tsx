import { Link } from "react-router-dom";


const PaymentCard =({onCancelCard}) =>{

return (
    // <!-- Payment Methods Section -->
    <div className="mb-6  ml-6">
        <h2 className="text-lg font-semibold mb-2">Payment Methods</h2>
        <div className=" flex border p-4 rounded-lg justify-between">
            <div>
                <label className="flex items-center mb-2">
                    <input onClick={onCancelCard} type="radio" name="payment" className="mr-2"/>
                    <span className="text-gray-600">Add a new card</span>
                </label>

            </div>

            {/* to be modified  later */}
            <div>
                <Link onClick={onCancelCard} to="#"  className="text-blue-500 mt-2 inline-block">View more</Link>

            </div>
        </div>
    </div>
)
}


export default PaymentCard ;