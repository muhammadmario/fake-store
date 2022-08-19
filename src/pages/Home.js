import React from "react";
import CardList from "../components/templates/CardList";
import FilterList from "../components/templates/FilterList";

function Home() {
  return (
    <div className="w-full flex flex-col px-2 md:px-10">
      <FilterList />
      <CardList />
    </div>
  );
}

export default Home;
