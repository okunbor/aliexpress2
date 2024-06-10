import CartProduct from "../src/types/CartProducts";

//utility to format currency 
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  

  
//utility to format date 
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
  };
  

//utility to get token and refreshToken  from browser 
  export const getLocalAuthData = () => {
    // return {
    //   token: localStorage.getItem(KEY_TOKEN) || "",
    //   refreshToken: localStorage.getItem(KEY_REFRESH_TOKEN) || "",
    //   expireTime: Number(localStorage.getItem(KEY_EXPIRE) || +new Date())
    // };

    return {
      token: localStorage.getItem("token") || "",
      refreshToken: localStorage.getItem("refreshToktn") || "",
      // expireTime: Number(localStorage.getItem(KEY_EXPIRE) || +new Date())
    };
  };


  // Utility functions to handle localStorage in cart service

  export  const loadState = (localname:string): CartProduct[] => {
    try {
      const serializedState = localStorage.getItem(localname);
      return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
      console.error("Could not load state from localStorage", e);
      return [];
    }
  };


  export const saveState = (state: CartProduct[],localname:string) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(localname, serializedState);
    } catch (e) {
      console.error("Could not save state to localStorage", e);
    }
  };