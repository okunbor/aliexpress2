

import { FaFacebookSquare, FaHeart, FaHome, FaInstagramSquare, FaShoppingBag, FaTwitter } from "react-icons/fa";
import { MdArrowForwardIos, MdStarRate } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "../../../app/slices/cartSlice";
import { useFetchProductByIdQuery } from "../../../app/services/productApi";
import RelatedProduct from "../RelatedProduct";
import CartProduct from "../../../types/CartProducts";
import { addToWishList } from "../../../app/slices/wishlistSlice";




const ProductTemplate = () => {
  const { id } = useParams();
  const { data , error, isLoading } = useFetchProductByIdQuery(id);
  const dispatch = useDispatch();
  const onIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const onDecreaseQuantity = (productId: number) => {
    dispatch(decreaseQuantity({ id: productId }));
  };


  const onAddToCart = (product:CartProduct ) => {
    dispatch(addToCart(product));
    toast.success("Added to cart", {
      position: "top-center",
      className: "bg-red-500"
    });

    alert("added to cart")
    
  };

  const onAddToWishList = (product: CartProduct) => {
    dispatch(addToWishList (product));
    toast.success("Added to wishlist", {
      position: "top-center",
      className: "bg-red-500"
    });

    alert("added to wshlist")
    
   
  };

  // console.log(data)
  if (isLoading) return <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div role="status">
      <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
      <span className="sr-only">Loading...</span>
  </div>
</div>;
  if (error) return <div className=" text-center">Error loading product</div>;

  return (
    <>
      <div className="container py-4 flex items-center gap-3">
       <Link to="/" className="text-primary text-base">
          <FaHome />
       </Link>
        <span className="text-sm text-gray-400">
        < MdArrowForwardIos />
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>
      {/* // <!-- ./breadcrumb --> */}

      {/* <!-- product-detail --> */}
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img src={data.thumbnail} alt="product" className="w-full" />
          <div className="grid grid-cols-5 gap-4 mt-4">
       
             {data.images.map((image, index) => (
             

                <img key={index} src={image} alt={data.title} className="w-full cursor-pointer border border-primary" />
                ))}

 
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
           {data.title}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
              <MdStarRate  />
              </span>
              <span>
              <MdStarRate  />
              </span>
              <span>
              <MdStarRate  />
              </span>
              <span>
              <MdStarRate/>
              </span>
              <span>
              <MdStarRate/>
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">{data.availabilityStatus}

              </span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">{data.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{data.category}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">{data.sku}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold"> {data.price}</p>
            <p className="text-base text-gray-400 line-through">$55.00 </p>
          </div>

          <p className="mt-4 text-gray-600">
           {data.description}
          </p>

          <div className="pt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-sm"
                  className="hidden"
                />
                <label
                  htmlFor="size-sm"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-m"
                  className="hidden"
                />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-l"
                  className="hidden"
                />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xl"
                  className="hidden"
                />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input type="radio" name="color" id="red" className="hidden" />
                <label
                  htmlFor="red"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: " #fc3d57;" }}
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="black"
                  className="hidden"
                />
                <label
                  htmlFor="black"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: "#000;" }}
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  id="white"
                  className="hidden"
                />
                <label
                  htmlFor="white"
                  className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  style={{ backgroundColor: " #fff;" }}
                ></label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div  onClick={() => onDecreaseQuantity (data.id)} className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
              {data.quantity}
              </div>
              <div  onClick={() =>  onIncreaseQuantity(data.id)}   className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
           <Link
              to="#"  onClick={() => onAddToCart(data)}
              className="bg-rose-500 border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-rose-500 transition"
            >
              <FaShoppingBag /> Add to cart
           </Link>
           <Link
              to="#"   onClick={() => onAddToWishList(data)}
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-rose-500 transition"
            >
              <FaHeart /> Wishlist
           </Link>
          </div>

          <div className="flex gap-3 mt-4">
           <Link
              to="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FaFacebookSquare />
           </Link>
           <Link
              to="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <FaTwitter />
           </Link>
           <Link
              to="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
             <FaInstagramSquare />
           </Link>
          </div>
        </div>
      </div>
      {/* <!-- ./product-detail --> */}

      {/* <!-- description --> */}
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              necessitatibus deleniti natus dolore cum maiores suscipit optio
              itaque voluptatibus veritatis tempora iste facilis non aut
              sapiente dolor quisquam, ex ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              quae accusantium voluptatem blanditiis sapiente voluptatum. Autem
              ab, dolorum assumenda earum veniam eius illo fugiat possimus illum
              dolor totam, ducimus excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              quia modi ut expedita! Iure molestiae labore cumque nobis quasi
              fuga, quibusdam rem? Temporibus consectetur corrupti rerum
              veritatis numquam labore amet.
            </p>
          </div>

          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Color
              </th>
              <th className="py-2 px-4 border border-gray-300 ">
                Blank, Brown, Red
              </th>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Material
              </th>
              <th className="py-2 px-4 border border-gray-300 ">Latex</th>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Weight
              </th>
              <th className="py-2 px-4 border border-gray-300 ">55kg</th>
            </tr>
          </table>
        </div>
      </div>
      {/* <!-- ./description --> */}

      {/* <!-- related product --> */}
     <RelatedProduct/>
    </>
  );
};

export default ProductTemplate;
