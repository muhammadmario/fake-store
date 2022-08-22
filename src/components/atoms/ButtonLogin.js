import React from "react";
import { Link } from "react-router-dom";

function ButtonLogin() {
  return (
    <button className="px-4 py-2 md:inline-block md:px-5 md:py-2 rounded-md border border-green-600 h-fit w-fit bg-green-500 text-white">
      <Link to={"/login"}>Login</Link>
    </button>
  );
}

export default ButtonLogin;
