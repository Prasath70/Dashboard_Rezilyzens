import { TbTriangleFilled } from "react-icons/tb";
import { useAtom } from "jotai";
import { Resulttoggle } from "./Reusedfunction";
import RadialProgress from "./Circleprogress";
function Navbar() {
  const [Navtoggle, Setnavtoggle] = useAtom(Resulttoggle);

  return (
    <div className="h-full w-full bg-[#050C30] py-3 px-2">
      <div className="container mx-auto">
        <div className=" border-[2px] rounded-lg border-[#AC47F7] bg-opacity-10 backdrop-filter backdrop-blur-lg  bg-white pl-8 flex justify-end lg:justify-between">
          <button
            className="  lg:my-3  flex gap-5 text-md lg:bg-purple-950 font-semibold tracking-wider  lg:border  rounded-sm border-[#AC47F7] text-white   justify-center items-center px-3 py-2"
            onClick={() => {
              Setnavtoggle(!Navtoggle);
            }}
          >
            <span className="hidden lg:block">Knowledge Assessment Result</span>
            <div className=" flex h-7 w-7 items-center justify-center rounded-full bg-purple-700">
              <TbTriangleFilled className="h-3 w-4" />
            </div>
          </button>
          <div className="flex gap-5 items-center justify-center gap-2">
            <div className="rounded-xl flex items-center justify-center py-2 px-2 ">
              <div>
                <RadialProgress
                  percentage={50}
                  size={10}
                  outColor={"stroke-slate-400"}
                  color={""}
                />
              </div>
              <div className="flex flex-col px-2">
                <p className="text-lg font-bold hidden lg:block text-white ">
                  65% <br />
                </p>{" "}
                <p className="text-xs hidden lg:block text-white font-light">
                  Correct
                </p>
              </div>
            </div>
            <div className="rounded-xl flex items-center justify-center py-2 px-2 ">
              <div>
                <RadialProgress
                  percentage={50}
                  size={10}
                  outColor={"stroke-slate-400"}
                  color={""}
                />
              </div>
              <div className="flex flex-col px-2">
                <p className="text-lg font-bold hidden lg:block text-white ">
                  20% <br />
                </p>{" "}
                <p className="text-xs hidden lg:block text-white font-light">
                  Incorrect
                </p>
              </div>
            </div>
            <div className="rounded-xl flex items-center justify-center py-2 px-2 ">
              <div>
                <RadialProgress
                  percentage={50}
                  size={10}
                  outColor={"stroke-slate-400"}
                  color={""}
                />
              </div>
              <div className="flex flex-col px-2">
                <p className="text-lg font-bold hidden lg:block text-white ">
                  15% <br />
                </p>{" "}
                <p className="text-xs hidden lg:block text-white font-light">
                  Don't Know
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
