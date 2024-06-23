import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store'
import { IProduct, ICartState } from "@/index";

const initialState: ICartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const { id } = action.payload;
      const productExists = state.products.some(product => product.id === id);
      if (!productExists) {
        state.products.push(action.payload);
      }
    },
  },
});

export const getCartProducts = (state: RootState): IProduct[] => state.cart.products;

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
