import ProductType from "../types/ProductType";

 interface CartProduct extends ProductType  {
  products: any;
  images: any ;
  quantity: number;
  availabilityStatus :string
  brand :string;
  sku :string;
  

}

export default CartProduct;
