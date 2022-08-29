import React, { useEffect } from "react";
import CardList from "../components/templates/CardList";
import FilterList from "../components/templates/FilterList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  // const navigate = useNavigate();
  // const { userToken } = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (userToken == null) {
  //     navigate("/login");
  //   }
  // }, [userToken]);

  return (
    <div className="w-full flex flex-col px-2 md:px-10">
      <FilterList />
      <CardList />
    </div>
  );
}

export default Home;
