import React from "react";

function Card({ title, price, image }) {
  return (
    <div className="w-full md:pl-5 cursor-pointer md:w-1/3 font-aboreto flex flex-col flex-wrap justify-center items-center  md:flex-row lg:w-1/5">
      <img src={image} alt="pic" className="aspect-square bg-cover" />
      <div className="w-full flex flex-wrap flex-col">
        <h1 className="text-xs text-center">{title}</h1>
        <p className="text-center">$ {price}</p>
      </div>
    </div>
  );
}

export default Card;
