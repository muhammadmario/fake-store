import React from "react";
import { Link } from "react-router-dom";

function Card({ title, price, image, key, id }) {
  return (
    <div key={key} className="w-full md:w-1/3 border">
      <Link to={`product/${id}`}>
        <img src={image} alt="pic" className="aspect-[4/5] px-10 pt-10" />
        <div className="w-full flex flex-wrap flex-col mt-2">
          <h1 className="text-base text-center">{title}</h1>
          <p className="text-center text-sm">$ {price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
