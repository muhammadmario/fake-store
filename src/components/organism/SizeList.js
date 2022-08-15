import React from "react";
import Size from "../atoms/Size";

function SizeList() {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold mb-3">Size</h1>
      <div className="border-t"></div>
      <Size />
      <Size />
      <Size />
      <Size />
    </div>
  );
}

export default SizeList;
