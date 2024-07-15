import { useParams } from "react-router-dom";
import { useFetchProductByNameQuery } from "../../app/services/productApi";
import Header from "../../component/header/header";
import ProductCard from "../../component/product";


// for search use keyword "phone"


const Search = ()=>{
    
    const {name } = useParams();
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data: products , isLoading ,error} = useFetchProductByNameQuery(name)

    if (isLoading) {
        return (
          <>
           <Header/>
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
          <Header/>
            <h2 className="my-10 text-center text-2xl font-bold">
              Error while fetching products. check your network
            </h2>
          </>
        );
      }
    
    return (
       
      <>
       <Header/>
    <div className="container pb-16 ">
      <h2 className="text-xl  ml-4 font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
        <div className="grid grid-cols-5 ml-5  gap-4  content-center  ">
       
    
         {products.products?.slice(0, 15)?.map((product) => (
           <ProductCard key={product.id} product={product} />
         ))}
      
     
     </div>
    
        
    </div>
      </>
        
      
      
      );
    };


export default Search ;