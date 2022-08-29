import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import moment from "moment";
import {
  decrementQuantity,
  getTotal,
  incrementQuantity,
} from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartList() {
  const { userToken } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const myDate = moment().format("YYYY-MM-DD");
  const carts = useSelector((state) => state.cart.cart);
  const { cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  // const { id } = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken == null) {
      navigate("/login");
    }
  }, [userToken]);

  useEffect(() => {
    dispatch(getTotal());
  }, [carts]);

  return (
    <div className="w-full flex flex-col px-2 md:flex-row min-h-[85vh]">
      {carts.length ? (
        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center items-center">
          {carts.map((cart) => (
            <div className="flex w-full md:w-full lg:w-3/4 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-1/2 md:max-h-60 hover:bg-gray-100 ">
              <img
                className="object-contain w-full h-48 md:h-96 rounded-t-lg md:max-h-60 md:w-48 md:rounded-none md:rounded-l-lg"
                src={cart.image}
                alt={cart.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 md:text-base lg:text-xl font-bold tracking-tight text-gray-900">
                  {cart.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 ">
                  $ {cart.price} x {cart.quantity} = ${" "}
                  {cart.price * cart.quantity}
                </p>
                <div className="flex gap-8 justify-center items-center">
                  <button
                    onClick={() => dispatch(decrementQuantity(cart))}
                    className="px-4 py-2 md:inline-block md:px-3 md:py-2 rounded-md border border-green-600 h-fit w-fit bg-white text-green-500"
                  >
                    -
                  </button>
                  <span className="text-xl">{cart.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(cart))}
                    className="px-4 py-2 md:inline-block md:px-3 md:py-2 rounded-md border border-green-600 h-fit w-fit bg-white text-green-500"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-xl">Your Cart is empty</h2>
        </div>
      )}
      <div className="w-full mt-4 md:mt-0 md:w-1/2  flex justify-center items-center ">
        <div className="border flex flex-col w-full  md:w-3/4 h-fit p-5">
          <div className="flex mb-4">
            <p className="text-xl">Total : </p>
            <p className="text-xl">$ {cartTotalAmount}</p>
          </div>

          <button className="self-center px-4 py-2 md:inline-block md:px-5 md:py-2 rounded-md border border-green-600 h-fit w-fit bg-green-500 text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
