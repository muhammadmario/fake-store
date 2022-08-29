import React, { useEffect } from "react";
import Card from "../atoms/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductStatus,
  fetchAllProducts,
  productSelector,
  getCategoryStatus,
  getSortStatus,
  getSortCategoryStatus,
} from "../../redux/features/product/productSlice";
import Loading from "./Loading";

function CardList() {
  const dispatch = useDispatch();
  const allProduct = useSelector(productSelector.selectAll);
  const productStatus = useSelector(getProductStatus);
  const sortStatus = useSelector(getSortStatus);
  const categoryStatus = useSelector(getSortCategoryStatus);
  const { userToken } = useSelector((state) => state.user);

  const customCategoryStatus = `/category/${categoryStatus}`;

  useEffect(() => {
    if (categoryStatus == "") {
      dispatch(fetchAllProducts(""));
    } else {
      dispatch(fetchAllProducts(customCategoryStatus));
    }
  }, [dispatch, sortStatus, categoryStatus]);

  let content;

  if (productStatus === "loading") {
    content = <Loading />;
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
    <div className="w-full flex flex-wrap justify-center md:justify-start">
      {content}
    </div>
  );
}

export default CardList;
