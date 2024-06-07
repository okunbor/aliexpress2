import { useState, useEffect } from 'react';

const useOrders = () => {
  const [productId, setProductId] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Current date
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Flag for loading state
  const [error, setError] = useState(null); // Stores any error during fetching

  // Fetches products based on ID and date (or current date)
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = `/api/products?id=${productId}&date=${date}`; // Replace with your API endpoint
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data.products);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetches products on component mount and on state changes
  useEffect(() => {
    fetchProducts();
  }, [productId, date]);

  // Handles product ID change
  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  // Handles date change
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Handles search button click (replace with your search logic)
  const handleSearch = () => {
    // Implement your search logic based on product ID and date
    fetchProducts();
  };

  return {
    productId,
    date,
    productList,
    isLoading,
    error,
    handleProductIdChange,
    handleDateChange,
    handleSearch,
  };
};

export default useOrders;
