import ProductType from "../types/ProductType";

 interface CartProduct extends ProductType  {
  quantity: number;
}

export default CartProduct;
