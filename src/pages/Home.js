import React from "react";
import Card from "../components/atoms/Card";
import CardList from "../components/templates/CardList";
import CategoryList from "../components/templates/CategoryList";

function Home() {
  return (
    <div className="w-full  flex px-10">
      <CategoryList />
      <CardList />
    </div>
  );
}

export default Home;
