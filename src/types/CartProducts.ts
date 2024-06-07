import ProductType from "../types/ProductType";

type CartProduct = ProductType & {
  quantity: number;
};

export default CartProduct;
