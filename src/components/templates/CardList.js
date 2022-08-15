import React from "react";
import Card from "../atoms/Card";

function CardList() {
  return (
    <div className=" w-full flex flex-wrap justify-end gap-3">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardList;
