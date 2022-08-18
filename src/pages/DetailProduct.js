import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchAllProducts,
  productSelector,
} from "../redux/features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";

function DetailProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    productSelector.selectById(state, Number(productId))
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (!product) {
    return (
      <section>
        <h2>not found</h2>
      </section>
    );
  }
  return (
    <div>
      <h3>{product.title}</h3>
    </div>
  );
}

export default DetailProduct;
