"use client";
import { useState } from "react";

import { useAtom } from "jotai";
import { Resulttoggle } from "./Reusedfunction";
import ChartDashboard from "./ChartDashboard";
import Resultpage from "./Resultpage";

function Dashboard() {
  const [Navtoggle, Setnavtoggle] = useAtom(Resulttoggle);
  return (
    <div className=" w-full  bg-[#050C30]  px-2 scrollbar-thumb-sky-700 scrollbar-track-sky-300 ">
      <div className="container mx-auto">
        {Navtoggle ? <ChartDashboard /> : <Resultpage />}
      </div>
    </div>
  );
}

export default Dashboard;
