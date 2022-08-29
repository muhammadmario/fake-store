import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const itemsExist = state.cart.find((item) => item.id === id);
      if (itemsExist) {
        itemsExist.quantity++;
        // alert("asssuuu");
        toast.success(`incrased cart quantity`);
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        toast.info(`incrased ${state.cart[itemIndex].name} cart quantity`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cart.push(tempProduct);
        toast.info(`incrased ${state.cart[itemIndex].name} cart quantity`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const itemsIndex = state.cart.findIndex(
        (cartitem) => cartitem.id === action.payload.id
      );
      console.log(action.payload.id);
      console.log(itemsIndex);
      if (state.cart[itemsIndex].quantity > 1) {
        state.cart[itemsIndex].quantity -= 1;
      } else if (state.cart[itemsIndex].quantity === 1) {
        const nextCartItem = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cart = nextCartItem;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
      localStorage.removeItem("cartItems");
    },
    getTotal: (state, action) => {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  incrementQuantity,
  removeItem,
  decrementQuantity,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
