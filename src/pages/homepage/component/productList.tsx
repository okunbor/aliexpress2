
import ProductCard from "../../../component/product";
import { useFetchProductsQuery } from "../../../app/services/productApi";

const  ProductList : React.FC  = () => {
  // const fetcher = async () =>
  //   fetch('https://dummyjson.com/products').then((res) => res.json());
  // const {
  //   data: products,
  //   isLoading,
  //   error,
  // }: { data: ProductType[]; isLoading: boolean; error: unknown } = useSWR(
  //   "/products",
  //   fetcher
  // );
  const { data: products,  isLoading ,error} = useFetchProductsQuery();

  if (isLoading) {
    return (
      <>
        <section className="flex items-center">
          <h2 className="my-10 text-center text-3xl font-bold ">Shop</h2>

          loading....


          {/* <PageLoading /> */}
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2 className="my-10 text-center text-2xl font-bold">
          Error while fetching products. check your network
        </h2>
      </>
    );
  }

return (
   
  
    
<div className="container pb-16 ">
  <h2 className="text-xl  ml-4 font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
    <div className="grid grid-cols-5 ml-5  gap-4  content-center  ">
   

     {products.products?.slice(0, 15)?.map((product) => (
       <ProductCard key={product.id} product={product} />
     ))}
  
 
 </div>

    
</div>
  
  
  );
};

export default ProductList ;
