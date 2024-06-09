export default interface ProductType {
   
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    thumbnail:string;
    rating: {
      rate: number;
      count: number;
    };
  }
  