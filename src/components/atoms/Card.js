import React from "react";
import { Link } from "react-router-dom";

function Card({ title, price, image, key, id }) {
  return (
    <div
      key={key}
      className="w-full md:w-1/2 lg:w-1/3 border flex flex-col justify-between"
    >
      <Link
        to={`product/${id}`}
        className="flex flex-col justify-center items-center  h-[500px] relative"
      >
        <div className="flex justify-center items-center ">
          <img src={image} alt="pic" className=" w-2/3 max-h-[450px]" />
        </div>

        <div className="w-full flex flex-col absolute bottom-0 py-2">
          <h1 className="text-base text-center">{title}</h1>
          <p className="text-center text-sm">$ {price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
