import React from "react";
import { Link } from "react-router-dom";

function Card({ title, price, image, key, id }) {
  return (
    <div
      key={key}
      className="w-full md:w-1/3 border flex flex-col  justify-between"
    >
      <Link
        to={`product/${id}`}
        className="flex flex-col justify-between items-center h-full "
      >
        <div className="h-[90%]  flex justify-center items-center">
          <img src={image} alt="pic" className="lg:px-10" />
        </div>

        <div className="w-full h-[10%] flex flex-col mt-2">
          <h1 className="text-base text-center">{title}</h1>
          <p className="text-center text-sm">$ {price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
