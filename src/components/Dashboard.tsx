"use client";
import { useState } from "react";
import { PiBookOpen } from "react-icons/pi";
import { TbMessageChatbot } from "react-icons/tb";
import Summary from "./Summary";

function Dashboard() {
  const [Summarytoggle, Setsummarytoggle] = useState(true);
  const [Chatgpttoggle, Setchatgpttoggle] = useState(false);

  return (
    <div className=" w-full  bg-[#050C30]  px-2 scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      <div className="container mx-auto">
        <div className="border-[2px] rounded-lg border-[#AC47F7]  h-full flex flex-col  py-8">
          <div className="w-full p-3 flex items-center gap-6 justify-center">
            <div className="flex items-center justify-center gap-5 ">
              <button
                className={`flex items-center justify-center  border border-[#4D66D0] gap-2 px-4 py-1 rounded-sm text-md ${
                  Summarytoggle ? "bg-[#4D66D0]" : "bg-transparent"
                }  `}
                onClick={() => {
                  console.log(Summarytoggle);
                  Setsummarytoggle(true);
                  Setchatgpttoggle(false);
                }}
              >
                <PiBookOpen className="text-white h-6 w-6 " />

                <span className={`text-white lg:block  hidden font-thin`}>
                  Summary
                </span>
              </button>
              <button
                className={`flex items-center justify-center  border border-[#4D66D0] gap-2 px-4 py-1 rounded-sm text-md ${
                  Chatgpttoggle ? "bg-[#4D66D0]" : "bg-transparent"
                }`}
                onClick={() => {
                  Setsummarytoggle(false);
                  Setchatgpttoggle(true);
                }}
              >
                <TbMessageChatbot className="text-white h-6 w-6" />

                <span className={`font-thin text-white hidden lg:block `}>
                  CyperKarma GPT
                </span>
              </button>
            </div>
          </div>
          <div className="w-full h-10  rounded-md px-2">
            <div className="border border-[#4D66D0]"></div>
          </div>
          {Summarytoggle && <Summary />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
