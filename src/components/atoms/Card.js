import React from "react";

function Card() {
  return (
    <div className="w-fit font-aboreto flex flex-col justify-center items-center">
      <img
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9bb3f55-801e-4cb0-963e-9ea2c01dce46/sportswear-max90-t-shirt-tdVGGv.png"
        alt="pic"
        className="aspect-square w-96 h-96"
      />
      <div>
        <h1>Nama produk</h1>
        <p className="text-center">$ 10.00</p>
      </div>
    </div>
  );
}

export default Card;
