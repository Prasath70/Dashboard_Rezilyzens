import { TbTriangleFilled } from "react-icons/tb";
import { useAtom } from "jotai";
import { Resulttoggle } from "./Reusedfunction";
import RadialProgress from "./Circleprogress";
import { motion } from "framer-motion";

function Navbar() {
  const [Navtoggle, Setnavtoggle] = useAtom(Resulttoggle);

  return (
    <div className="h-full w-full bg-[#050C30] py-3 px-2">
      <div className="container mx-auto">
        <motion.div
          className="border-[2px] rounded-lg border-[#AC47F7] bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white pl-8 flex justify-between lg:justify-between"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <button
            className={`lg:my-3 ${
              Navtoggle ? "animate-pulse lg:bg-red-800 " : " lg:bg-purple-950"
            } flex gap-5 text-md font-semibold tracking-wider lg:border rounded-sm border-[#AC47F7] text-white justify-center items-center px-3 py-2`}
            onClick={() => {
              Setnavtoggle(!Navtoggle);
            }}
          >
            <span className="hidden lg:block">Knowledge Assessment Result</span>
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full bg-purple-700 ${
                Navtoggle
                  ? "animate-pulse lg:bg-red-800 rotate-0 transition duration-700 ease-in-out"
                  : " rotate-180 transition duration-700 ease-in-out"
              } `}
            >
              <TbTriangleFilled className="h-3 w-4" />
            </div>
          </button>
          <div className="flex items-center justify-center gap-2">
            <motion.div
              className="rounded-xl flex items-center justify-center py-2 px-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <RadialProgress
                  percentage={50}
                  size={10}
                  outColor={"stroke-slate-400"}
                  color={"red"}
                />
              </div>
              <div className="flex-col px-2 hidden lg:flex">
                <p className="text-lg font-bold hidden lg:block text-white">
                  65% <br />
                </p>{" "}
                <p className="text-xs hidden lg:block text-white font-light">
                  Correct
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl flex items-center justify-center py-2 px-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <RadialProgress
                  percentage={50}
                  size={10}
                  outColor={"stroke-slate-400"}
                  color={"yellow"}
                />
              </div>
              <div className="flex-col px-2 hidden lg:flex">
                <p className="text-lg font-bold hidden lg:block text-white">
                  20% <br />
                </p>{" "}
                <p className="text-xs hidden lg:block text-white font-light">
                  Incorrect
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl flex items-center justify-center py-2 px-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div>
                <RadialProgress
                  percentage={50}
                  size={10}
                  outColor={"stroke-slate-400"}
                  color={"green"}
                />
              </div>
              <div className="flex-col px-2 hidden lg:flex">
                <p className="text-lg font-bold hidden lg:block text-white">
                  15% <br />
                </p>{" "}
                <p className="text-xs hidden lg:block text-white font-light">
                  Don't Know
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
