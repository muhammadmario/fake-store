import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="w-full flex justify-center items-center min-h-[80vh]">
      <ReactLoading type={"balls"} color={"#000000"} height={400} width={250} />
    </div>
  );
}

export default Loading;
