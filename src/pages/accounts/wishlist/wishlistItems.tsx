import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { addToCart,  } from "../../../app/slices/cartSlice";
import { toast } from "react-hot-toast";
import CartProduct from "../../../types/CartProducts";
import { removeItem } from "../../../app/slices/wishlistSlice";
// import ProductType from "../../types/ProductType";

interface ProductCardProps {
    product: CartProduct;
  }

const WishListItems: React.FC<ProductCardProps> = ({product}) =>
    {
const dispatch = useDispatch();
const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlist);

 
// const onAddToCart = (product: CartProduct) => {
//     dispatch(addToWishList(product));
//     toast.success("Added to cart", {
//       position: "top-center",
//       className: "bg-red-500"
//     });

//     alert("added to cart")
    
//   };

const onAddToCart = (product: CartProduct) => {
    dispatch(addToCart(product));
    toast.success("Added to cart", {
      position: "top-center",
      className: "bg-red-500"
    });
    onRemoveItem (product.id)

}


  const  onRemoveItem = (productId: number) => {
    dispatch(removeItem({ id: productId }));}


return(


    <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-4 shadow-lg rounded-lg">
        <img src={product.thumbnail} alt={product.title} className="w-full md:w-24 h-24 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"/>
        <div>
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-500">10000+ orders</p>
            <p className="text-red-500 font-bold">${product.price} <span className="text-gray-500 line-through">-68% off since added</span></p>
            <div className="mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2" onClick={() => onAddToCart(product)} >Move to cart</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2">More</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg" onClick={() => onRemoveItem(product.id)}>Delete</button>
            </div>
        </div>
    </div>
 
  );
  }
    
export default WishListItems;



