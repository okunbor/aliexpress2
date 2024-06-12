import { Link } from "react-router-dom"



const ShippingAddress = ( {onAddShipping}) =>{

return (

    <div className="mb-6 ">
    <h2 className="text-lg font-semibold mb-2 ml-6">Shipping Address</h2>
    <div className=" flex border p-4 rounded-lg  ml-6 justify-between  ">
        <div>
            <p className="font-bold">okunbor</p>
            <p className="text-gray-600">+234 8141562172</p>
            <p className="text-gray-600">ugbowo</p>
            <p className="text-gray-600">Ovia North-East, Edo state, Nigeria, 310021</p>

        </div>
        <div>

            <Link to="" onClick={onAddShipping}  className="  text-blue-500 mt-2 inline-block  ">Change</Link>

        </div>
    </div>
</div>

)
}

export default ShippingAddress