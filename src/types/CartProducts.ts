import ProductType from "../types/ProductType";

 interface CartProduct extends ProductType  {
  images: any | object;
  quantity: number;
  availabilityStatus :string
  brand :string;
  sku :string;
}

export default CartProduct;
