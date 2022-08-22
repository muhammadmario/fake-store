import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/userSlice";

function ButtonLogout() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 md:inline-block md:px-3 md:py-2 rounded-md border border-green-600 h-fit w-fit bg-white text-green-500"
    >
      Logout
    </button>
  );
}

export default ButtonLogout;
