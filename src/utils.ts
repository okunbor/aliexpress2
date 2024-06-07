export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
  };
  


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