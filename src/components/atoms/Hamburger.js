import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSidebarValue,
  toggleSidebar,
} from "../../redux/features/navbar/navbarSlice";

function Hamburger() {
  const dispatch = useDispatch();
  const sidebarValue = useSelector(getSidebarValue);

  console.log(sidebarValue);
  return (
    <div
      className="block md:hidden  cursor-pointer "
      onClick={() => dispatch(toggleSidebar())}
    >
      {sidebarValue ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </div>
  );
}

export default Hamburger;
