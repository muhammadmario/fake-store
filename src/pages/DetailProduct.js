import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchAllProducts,
  productSelector,
} from "../redux/features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import ButtonLogin from "../components/atoms/ButtonLogin";
import ButtonRegister from "../components/atoms/ButtonRegister";
import ButtonAddToCart from "../components/atoms/ButtonAddToCart";
import Size from "../components/atoms/Size";

function DetailProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    productSelector.selectById(state, Number(productId))
  );

  useEffect(() => {
    dispatch(fetchAllProducts(""));
  }, [dispatch]);

  if (!product) {
    return (
      <section>
        <h2>not found</h2>
      </section>
    );
  }
  return (
    <div className="w-full flex flex-col min-h-[80vh]  px-2 lg:flex-row md:px-10 md:mt-10 md:justify-center md:items-center">
      <div className="w-full font-merriweather lg:w-1/2 md:order-2 md:flex md:flex-col md:justify-center md:items-center">
        <h3 className="text-center md:text-2xl lg:text-3xl">{product.title}</h3>
        <h4 className="text-center md:text-xl">$ {product.price}</h4>
        <p className="hidden text-sm font-light md:block md:text-base md:mt-4 lg:px-10">
          {product.description}
        </p>

        <div className="w-full flex gap-4 md:gap-6 lg:gap-10 items-center justify-center my-4 md:my-10">
          <p>SIZE : </p>
          <Size value={"SM"} />
          <Size value={"M"} />
          <Size value={"MD"} />
          <Size value={"XL"} />
        </div>
        <div className="hidden md:block">
          <ButtonAddToCart />
        </div>
      </div>
      <div className="w-full flex flex-col items-center md:order-1 lg:w-1/2">
        <img
          className="w-3/4 md:w-1/2 "
          src={product.image}
          alt={product.title}
        />
        <p className="text-sm font-light mt-4 md:hidden">
          {product.description}
        </p>
        <div className="mt-4 md:hidden">
          <ButtonAddToCart />
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
