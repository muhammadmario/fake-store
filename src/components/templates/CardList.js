import React, { useEffect } from "react";
import Card from "../atoms/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductStatus,
  selectAllProduct,
  fetchAllProducts,
} from "../../redux/features/product/productSlice";

function CardList() {
  const dispatch = useDispatch();
  const allProduct = useSelector(selectAllProduct);
  const productStatus = useSelector(getProductStatus);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, productStatus]);

  return (
    <div className="w-full flex flex-wrap justify-center md:justify-start  box-border">
      {productStatus === "loading" ? (
        <p>loading</p>
      ) : productStatus === "succeeded" ? (
        allProduct.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      ) : (
        <p>Failed</p>
      )}
    </div>
  );
}

export default CardList;
