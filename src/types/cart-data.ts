export interface CartData {
  userID: string;
  items: Array<CartItemData>;
}

export interface CartItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
