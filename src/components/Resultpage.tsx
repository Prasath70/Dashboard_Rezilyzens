import React from "react";
import RadialProgress from "./Circleprogress";

function Resultpage() {
  return (
    <div className="border-[2px] rounded-lg border-[#AC47F7]  h-full flex flex-col  py-8 bg-opacity-10 backdrop-filter backdrop-blur-lg  bg-white">
      <div className="h-10 w-10 ">
        <RadialProgress percentage={95} size={100} />
      </div>
    </div>
  );
}

export default Resultpage;
