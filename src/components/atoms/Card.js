import React from "react";
import { Link } from "react-router-dom";

function Card({ title, price, image, key, id }) {
  return (
    <div
      key={key}
      className="w-full md:pl-5 cursor-pointer md:w-1/3 font-aboreto flex flex-col flex-wrap justify-center items-center  md:flex-row lg:w-1/5"
    >
      <Link to={`product/${id}`}>
        <img src={image} alt="pic" className="aspect-square bg-cover" />
        <div className="w-full flex flex-wrap flex-col">
          <h1 className="text-xs text-center">{title}</h1>
          <p className="text-center">$ {price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
