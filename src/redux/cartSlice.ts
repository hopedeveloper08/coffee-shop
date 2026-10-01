import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export type CartItem = {
  id: number;
  count: number;
};

const getInitialCart = (): CartItem[] => {
  try {
    const cart = localStorage.getItem("cart");

    if (!cart) return [];

    return JSON.parse(cart) as CartItem[];
  } catch {
    return [];
  }
};

const initialState: CartItem[] = getInitialCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.find(
        item => item.id === action.payload
      );

      if (existingItem) {
        existingItem.count += 1;
        toast.success('با موفقیت به سبدخرید اضافه شد!')
        return;
      }

      state.push({
        id: action.payload,
        count: 1,
      });
      localStorage.setItem("cart", JSON.stringify(state))
      toast.success('با موفقیت به سبدخرید اضافه شد!')
    },

    increment: (state, action: PayloadAction<number>) => {
      const item = state.find(
        item => item.id === action.payload
      );

      if (item) {
        item.count += 1;
        localStorage.setItem("cart", JSON.stringify(state))
        toast.success('با موفقیت به سبدخرید اضافه شد!')
      }
    },

    decrement: (state, action: PayloadAction<number>) => {
      const item = state.find(
        item => item.id === action.payload
      );

      if (!item) return;

      if (item.count === 1) {
        const index = state.findIndex(
          item => item.id === action.payload
        );

        state.splice(index, 1);
        toast.success('با موفقیت از سبدخرید حذف شد!')
      } else {
        item.count -= 1;
        toast.success('با موفقیت از سبدخرید کم شد!')
      }
      localStorage.setItem("cart", JSON.stringify(state))
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions
export default cartSlice.reducer