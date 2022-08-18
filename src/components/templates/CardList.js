import React, { useEffect } from "react";
import Card from "../atoms/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductStatus,
  fetchAllProducts,
  productSelector,
} from "../../redux/features/product/productSlice";

function CardList() {
  const dispatch = useDispatch();
  const allProduct = useSelector(productSelector.selectAll);
  const productStatus = useSelector(getProductStatus);
  // console.log(productStatus);
  // console.log(allProduct);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, productStatus]);

  let content;

  if (productStatus === "loading") {
    content = <p>Loading..</p>;
  } else if (productStatus === "succeeded") {
    content = allProduct.map((product) => (
      <Card
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    ));
  } else if (productStatus === "failed") {
    content = <p>error</p>;
  }

  return (
    <div className="w-full flex flex-wrap justify-center md:justify-start  box-border">
      {content}
    </div>
  );
}

export default CardList;
