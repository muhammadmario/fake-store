import React from "react";
import Category from "../atoms/Category";
import SizeList from "../organism/SizeList";

function CategoryList() {
  return (
    <div>
      <Category />
      <SizeList />
      <SizeList />
    </div>
  );
}

export default CategoryList;
