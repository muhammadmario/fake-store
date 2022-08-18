import React from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "../atoms/ButtonLogin";
import ButtonRegister from "../atoms/ButtonRegister";
import Cart from "../atoms/Cart";
import Hamburger from "../atoms/Hamburger";
import Logo from "../atoms/Logo";
import Navlink from "../atoms/Navlink";
import Search from "../atoms/Search";

function Navbar() {
  return (
    <div className="w-full sticky top-0 border-b bg-white border-slate-900/10 h-20 flex justify-between items-center px-2 z-10 md:px-10">
      <Hamburger />
      <Link to="/">
        <Logo />
      </Link>

      <Search />
      <div className="flex gap-4 justify-center items-center">
        <Navlink />
        <Cart />
      </div>
    </div>
  );
}

export default Navbar;
