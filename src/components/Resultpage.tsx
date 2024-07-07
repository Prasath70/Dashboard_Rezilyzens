"use clinet";
import React from "react";
import RadialProgress from "./Circleprogress";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Resultpage() {
  interface AccordionItem {
    heading: string;
    content: string;
    percentage: number;
    color: string;
    outColor: string;
  }
  const Accordiondata: AccordionItem[] = [
    {
      heading: "Human Layer",
      content:
        "Pinochle-Al is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of theweb, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globallystationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
      percentage: 30,
      color: `red`,
      outColor: "stroke-slate-400",
    },
    {
      heading: "Perimeter Security",
      content:
        "Pinochle-Al is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of theweb, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globallystationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
      percentage: 30,
      color: "red",
      outColor: "stroke-slate-400",
    },
    {
      heading: "Perimeter Security",
      content:
        "Pinochle-Al is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of theweb, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globallystationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
      percentage: 60,
      color: "yellow",
      outColor: "stroke-slate-400",
    },
    {
      heading: "Endpoint Security",
      content:
        "Pinochle-Al is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of theweb, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globallystationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
      percentage: 70,
      color: "yellow",
      outColor: "stroke-slate-400",
    },
    {
      heading: "Application Security",
      content:
        "Pinochle-Al is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of theweb, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globallystationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.",
      percentage: 100,
      color: "green",
      outColor: "stroke-slate-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-end gap-3 py-6">
        <div className="bg-[#3a4066] rounded-3xl text-white px-4 py-1 border border-[#AC47F8] flex gap-2 items-center justify-center">
          <div className="h-[1.7rem] w-[1.7rem] rounded-full bg-transparent bg-[#AC47F8] text-white flex items-center justify-center ">
            <MdOutlineQuestionMark className="mx-auto h-[0.9rem] w-[0.9rem]" />
          </div>
          <p className="text-center text-sm px-2 py-2 hidden lg:block">
            All Questions
          </p>
        </div>
        <div className="bg-[#101843] rounded-3xl text-white px-4 py-1 border border-[#AC47F7] flex gap-2 items-center justify-center">
          <div className="h-[1.7rem] w-[1.7rem] rounded-full bg-transparent bg-[#AC47F8] text-white flex items-center justify-center">
            <HiOutlineExclamationTriangle className="mx-auto h-[0.9rem] w-[0.9rem]" />
          </div>
          <p className="text-center text-sm px-2 py-2 hidden lg:block">
            Vulnerability
          </p>
        </div>
        <div className="bg-[#101843] rounded-3xl text-white px-4 py-1 border-[#eb886b] border flex gap-2 items-center justify-center">
          <div className="h-[1.7rem] w-[1.7rem] rounded-full bg-transparent bg-[#eb886b] border flex items-center justify-center">
            <IoMdClose className="mx-auto h-[0.9rem] w-[0.9rem]" />
          </div>
          <p className="text-center text-sm px-2 py-2 hidden lg:block">SOC</p>
        </div>
        <div className="bg-[#101843] rounded-3xl text-white px-4 py-1 border border-[#8586bd] flex gap-2 items-center justify-center">
          <div className="h-[1.7rem] w-[1.7rem] rounded-full bg-transparent bg-[#8586bd] text-white flex items-center justify-center">
            <MdElectricBolt className="mx-auto h-[0.9rem] w-[0.9rem]" />
          </div>
          <p className="text-center text-sm px-2 py-2 hidden lg:block">
            Hardening
          </p>
        </div>
      </div>
      <motion.div
        className="w-full flex flex-col gap-9"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {Accordiondata.map((data, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Customaccordion
              color={data.color}
              content={data.content}
              heading={data.heading}
              outColor={data.outColor}
              percentage={data.percentage}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Resultpage;

interface accordionprops {
  heading: string;
  content: string;
  percentage: number;
  color: string;
  outColor: string;
}

const Customaccordion: React.FC<accordionprops> = ({
  heading,
  content,
  percentage,
  color,
  outColor,
}) => {
  return (
    <div
      className="flex  flex-col  group transition ease-in-out  cursor-pointer focus-within:bg-[#1a2b67]  bg-white w-full px-3 h-full border-[2px] rounded-lg border-[#AC47F7] border-l-[0.9rem]  py-8 bg-opacity-10 backdrop-filter backdrop-blur-lg duration-700"
      tabIndex={0}
    >
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-white text-md  transition ease-in-out duration-100 lg:text-xl font-light tracking-wider">
          {heading}
        </h1>
        <div className="flex items-center justify-center gap-1 md:gap-4 lg:gap-16">
          <div className="bg-[#2a3463]  px-3 py-1.5 rounded-xl flex gap-2 items-center justify-center ">
            <div>
              <RadialProgress
                percentage={percentage}
                size={10}
                outColor={outColor}
                color={color}
              />
            </div>
            <p className=" text-center  text-sm px-2 py-2 hidden lg:block text-white ">
              vulnerability
            </p>{" "}
          </div>

          <div className="bg-[#2a3463]  px-3 py-1.5 rounded-xl flex gap-2 items-center justify-center">
            <div className="h-[1.5rem] w-[1.5rem]  md:h-[1.7rem] md:w-[1.7rem] rounded-full bg-transparent bg-[#eb886b] text-white flex items-center justify-center ">
              <IoMdClose className="mx-auto h-[0.9rem] w-[0.9rem]" />
            </div>
            <p className=" text-center  text-sm px-2 py-2 hidden lg:block text-white">
              vulnerability
            </p>{" "}
          </div>
          <div className="bg-[#2a3463]  px-3 py-1.5 rounded-xl flex gap-2 items-center justify-center">
            <div className="h-[1.5rem] w-[1.5rem]  md:h-[1.7rem] md:w-[1.7rem] rounded-full bg-transparent bg-[#8586bd] text-white flex items-center justify-center">
              <MdElectricBolt className="mx-auto h-[0.9rem] w-[0.9rem]" />
            </div>
            <p className=" text-center  text-sm px-2 py-2 hidden lg:block text-white">
              soc
            </p>{" "}
          </div>
          <div className="  ">
            {" "}
            <div className="h-[1.7rem] w-[1.7rem]  md:h-[2.5rem] md:w-[2.5rem] rounded-full bg-transparent border border-[#AC47F7] text-[#AC47F7] flex items-center justify-center focus:bg-red-800 focus:text-white">
              <IoIosArrowForward className="h-[1.5rem] w-[1.5rem] group-focus:rotate-90 transition ease-out duration-150" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden group-focus:block group-focus:h-full   transition ease-in-out duration-700 px-1 py-3 ">
        <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white w-full h-1 rounded-full "></div>
        <div className="flex items-center justify-start gap-5 w-full py-5">
          <button
            className={`flex items-center justify-center  border border-[#4D66D0] gap-2 px-4 py-1 rounded-sm text-md   bg-[#4d66d0] `}
          >
            <IoIosStarOutline className="text-white h-6 w-6 " />

            <span className={`text-white lg:block  hidden font-thin`}>
              Top 5
            </span>
          </button>
          <button
            className={`flex items-center justify-center  border border-[#4D66D0] gap-2 px-6 py-1 rounded-sm text-md `}
          >
            <IoIosStarOutline className="text-white h-6 w-6" />

            <span className={`font-thin text-white hidden lg:block `}>
              Enabler
            </span>
          </button>
        </div>
        <div>
          <p className="text-white tracking-wide text-md">{content}</p>
        </div>
      </div>
    </div>
  );
};
