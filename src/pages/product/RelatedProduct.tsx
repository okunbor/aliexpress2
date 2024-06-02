
import ProductCard from "../../component/product";
import ProductType from "../../../types/ProductType";
import useSWR from "swr";


const RelatedProduct = ()=>{

    const fetcher = async () =>
        fetch("https://fakestoreapi.com/products").then((res) => res.json());
      const {
        data: products,
        isLoading,
        error,
      }: { data: ProductType[]; isLoading: boolean; error: unknown } = useSWR(
        "/products",
        fetcher
      );
    
      if (isLoading) {
        return (
          <>
            <section>
              <h2 className="my-10 text-center text-3xl font-bold">Shop</h2>
    
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
              Error while fetching products.
            </h2>
          </>
        );
      }
    
      return (
        <div className="container pb-16  ml-4 mt-3">
        <h2 className="text-xl font-medium  text-gray-800 uppercase mb-6">More To Love</h2>
          <div className="grid grid-cols-5   gap-4">
            {products?.slice(0, 5)?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

       </div>
      );


}



export default RelatedProduct;