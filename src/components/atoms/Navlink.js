import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSidebarValue,
  toggleSidebar,
} from "../../redux/features/navbar/navbarSlice";
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";
import ButtonRegister from "./ButtonRegister";

function Navlink() {
  const sidebarValue = useSelector(getSidebarValue);
  const { userToken } = useSelector((state) => state.user);

  return (
    <ul
      className={`font-aboreto bg-slate-900/10 md:bg-white absolute flex flex-col left-0 top-0 h-screen w-fit mt-20 gap-3 py-2 px-2 md:static md:h-fit md:left-auto md:top-auto md:mt-0 md:flex-row md:justify-end md:gap-6 md:w-fit  md:py-4 md:text-black ${
        sidebarValue ? "" : "-translate-x-full md:translate-x-0"
      } `}
    >
      <div className="order-2 md:order-1 flex flex-col gap-2 md:gap-5 md:flex-row  cursor-pointer">
        <li className="md:flex md:justify-center md:items-center">Men</li>
        <li className="md:flex md:justify-center md:items-center">Women</li>
        <li className="md:flex md:justify-center md:items-center">Kids</li>
      </div>

      <div className="flex gap-2 order-1 md:order-2">
        {userToken ? <ButtonLogout /> : <ButtonLogin />}

        <div className="hidden lg:block">
          {userToken ? "" : <ButtonRegister />}
        </div>
      </div>
    </ul>
  );
}

export default Navlink;
