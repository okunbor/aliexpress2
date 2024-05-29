import CartProduct from "../../../types/CartProducts";



interface CartItemCardProps {
    product: CartProduct;
  }
const CartItems :React.FC<CartItemCardProps> = ({ product })=>{

return(
<div className="flex justify-between">
                    <div>
                        <h5 className="text-gray-800 font-medium">{product.title}</h5>
                        {/* <p className="text-sm text-gray-600">Size: M</p> */}
                    </div>
                    <p className="text-gray-600">
                        {product.quantity}
                    </p>
                    <p className="text-gray-800 font-medium">${product.price}</p> 
                    </div>

)

}

export default CartItems;