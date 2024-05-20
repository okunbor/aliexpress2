import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make a GET request to the ecommerce products API
        const response = await axios.get('https://fakestoreapi.com/products?limit=5');
        // Set the products state with the response data
        setProducts(response.data);
      } catch (error : any ) {
        // If an error occurs, set the error state
        setError( error);
      } finally {
        // Set loading to false, regardless of whether there was an error or not
        setLoading(false);
      }
    };

    // Call the fetchProducts function when the component mounts
    fetchProducts();
  }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!products.length) return <div>No products available</div>;

//   return (
//     <div>
//       <h1> List:</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
  //       </ul>
  
    {/* <div className="bg-white shadow rounded overflow-hidden    group">
                    <div className="relative">
                        <img src={img1} alt="product 1" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                Chair</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <MdStarRate className="" />
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                               
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden    group">
                    <div className="relative">
                        <img src={img4} alt="product 1" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                                King Size</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <MdStarRate />
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden    group">
                    <div className="relative">
                        <img src={img5} alt="product 1" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                Couple Sofa</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <MdStarRate />
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden    group">
                    <div className="relative">
                        <img src={img3} alt="product 1" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                Mattrass X</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <MdStarRate />
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden    group">
                    <div className="relative">
                        <img src={ img1} alt="product 1" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                Chair</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <MdStarRate />
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden    group">
                    <div className="relative">
                        <img src={img4} alt="product 1" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                                King Size</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <MdStarRate />
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden   group ">
                    <div className="relative">
                        <img src={img2} alt="product 1" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                Couple Sofa</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <MdStarRate />
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden    group">
                    <div className="relative">
                        <img src={img1} alt="product 1" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#"
                                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="add to wishlist">
                                <i className="fa-solid fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                Mattrass X</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <MdStarRate />
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                                <MdStarRate/>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#"
                        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                </div> */}
       
//     </div>
//   );
 };

export default ProductList
