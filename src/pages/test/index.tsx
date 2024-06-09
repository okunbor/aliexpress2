// /src/components/ProductList.tsx


import { useParams } from 'react-router-dom';
import { useFetchProductByIdQuery, useFetchProductsQuery } from '../../app/services/productApi';

const Component = () => {
  const { id } = useParams();
  const { data , error, isLoading } = useFetchProductByIdQuery(id);
  // const { data, error, isLoading } = useFetchProductsQuery();
  console.log(data)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  // if (!products) return <div>Product not found</div>;


  return (
  
    
   <p> moses is handlePlaceOrder</p>
    
   
    
  );
};

export default Component;
