import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/features/cart/cartSlice";

function ButtonAddToCart() {
  const dispatch = useDispatch();
  // const handleClick = () => {
  //   console.log("ayayay");
  //   dispatch(addCart());
  // };

  return (
    <button className="px-4 py-2 md:inline-block md:px-5 md:py-2 rounded-md border border-green-600 h-fit w-fit bg-green-500 text-white">
      Add to cart
    </button>
  );
}

export default ButtonAddToCart;
