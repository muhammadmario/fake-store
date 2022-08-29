import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/organism/Navbar";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux/features/auth/userSlice";
import { useNavigate } from "react-router-dom";

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("ayammmmm");
    dispatch(fetchUser(2));
  }, []);

  return (
    <>
      <Navbar />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
