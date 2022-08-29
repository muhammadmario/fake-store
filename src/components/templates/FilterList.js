import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
  selectAllCategory,
} from "../../redux/features/category/categorySlice";
import {
  sortProduct,
  sortProductByCategory,
} from "../../redux/features/product/productSlice";

function FilterList() {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const categories = useSelector(selectAllCategory);

  useEffect(() => {
    dispatch(sortProduct(sortBy));
  }, [sortBy]);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  useEffect(() => {
    dispatch(sortProductByCategory(productCategory));
  }, [productCategory]);

  return (
    <div className="w-full flex items-center justify-between font-aboreto">
      <ul className="flex gap-4 w-full py-3  overflow-x-auto items-center text-xs md:text-base">
        <li className="cursor-pointer" onClick={() => setProductCategory("")}>
          All
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            className="cursor-pointer"
            onClick={() => setProductCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      {/* <form className="w-1/3 py-5">
        <fieldset>
          <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
            <label htmlFor="frm-whatever" className="sr-only">
              My field
            </label>
            <select
              className="appearance-none w-full py-1 px-2 bg-white"
              name="whatever"
              id="frm-whatever"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="?sort=asc">Ascending</option>
              <option value="?sort=desc">Descending</option>
            </select>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </fieldset>
      </form> */}
    </div>
  );
}

export default FilterList;
