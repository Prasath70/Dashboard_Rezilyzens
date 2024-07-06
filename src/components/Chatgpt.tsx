"use client";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import { GoPlus } from "react-icons/go";

function Chatgpt() {
  const [Userdata, Setuserdata] = useState("");
  const [Chatdata, Setchatdata] = useState([
    {
      role: "AI",
      content: (
        <p>Hello! How can I assist you with your cybersecurity needs today?</p>
      ),
    },
    {
      role: "user",
      content: (
        <p>
          {" "}
          Hi there, can you help me understand our current cybersecurity
          posture?
        </p>
      ),
    },
    {
      role: "AI",
      content: (
        <p>
          Of course! I have a comprehensive overview of your cybersecurity
          framework. Would you like a summary or details on a specific area?
        </p>
      ),
    },
    {
      role: "user",
      content: <p>Start with a summary, please.</p>,
    },
    {
      role: "AI",
      content: (
        <p>
          Sure! Based on the latest assessments: <br /> • Threat Protection: 85%
          secure. Your systems have good protection against known threats.
          <br /> • Access Control: 70% secure. There are some areas of
          improvement in user access control.
          <br /> • Data Protection: 90% secure. Data encryption and backup
          procedures are well in place.
          <br /> • Incident Response: 75% secure. There are gaps in your
          incident response plan. Would you like detailed feedback on any
          specific area? •
        </p>
      ),
    },
  ]);

  return (
    <div className="h-[70vh] ">
      <div className="container mx-auto relative h-full ">
        <div className="pl-5 flex gap-3 items-end justify-start flex-col overflow-auto h-[calc(100%-4rem)] pb-16">
          {Chatdata.map((data, index) => {
            return (
              <Chatbubble key={index} role={data.role} content={data.content} />
            );
          })}
        </div>
        <div className="w-full px-5 py-3 absolute bottom-0">
          <div className="w-full relative">
            <textarea
              onChange={(e) => {
                Setuserdata(e.currentTarget.value);
              }}
              className="bg-[#4D66D0] px-5 pt-2 rounded-md py-3 w-full pl-10 pr-24 overflow-hidden text-white"
              style={{ paddingLeft: "4rem", paddingTop: "1rem" }} 
            />
            <GoPlus
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 bg-[#bbc7fe] h-8 w-8 rounded-md"
              style={{ zIndex: 10 }} 
            />
            <div
              className="h-10 w-20 bg-[#4fffbe] absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-black font-bold rounded-md cursor-pointer"
              onClick={() => {
                const newMessage = {
                  role: "user",
                  content: <p>{Userdata}</p>,
                };
                Setchatdata((prevChatdata) => [...prevChatdata, newMessage]);
              }}
            >
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatgpt;

interface ChatbubbleProps {
  role: string;
  content: any; 
}

const Chatbubble: React.FC<ChatbubbleProps> = ({ role, content }) => {
  return (
    <div
      className={`items-end flex gap-2 w-full ${
        role === "AI" ? "justify-start" : "flex-row-reverse"
      } pr-5`}
    >
      <div className="h-[3rem] w-[3rem] rounded-full bg-transparent border border-[#AC47F7] text-white flex items-center justify-center">
        {role === "AI" ? (
          <FaRegUser className="mx-auto h-[1rem] w-[1rem]" />
        ) : (
          <TbMessageChatbot className="mx-auto h-[1.5rem] w-[1.5rem] " />
        )}
      </div>
      <div
        className={`md:max-w-2xl lg:max-w-5xl font-light   max-w-[11rem] text-sm md:text-md lg:text-xl lg:px-10  bg-[#4D66D0] px-4 text-white text-md tracking-wide py-4 text-start flex items-center justify-center ${
          role === "AI"
            ? "rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"
            : "rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl"
        }`}
      >
        {content}
      </div>
    </div>
  );
};
