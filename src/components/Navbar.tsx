import { TbTriangleFilled } from "react-icons/tb";
import { useAtom } from "jotai";
import { Resulttoggle } from "./Reusedfunction";
function Navbar() {
  const [Navtoggle, Setnavtoggle] = useAtom(Resulttoggle);

  return (
    <div className="h-full w-full bg-[#050C30] py-3 px-2">
      <div className="container mx-auto">
        <div className=" border-[2px] rounded-lg border-[#AC47F7] bg-opacity-10 backdrop-filter backdrop-blur-lg  bg-white pl-8 flex justify-end lg:justify-start">
          <button
            className="  lg:my-3  flex gap-5 text-md lg:bg-purple-950 font-semibold tracking-wider  lg:border  rounded-sm border-[#AC47F7] text-white   justify-center items-center px-3 py-2"
            onClick={(e) => {
              Setnavtoggle(!Navtoggle);
            }}
          >
            <span className="hidden lg:block">Knowledge Assessment Result</span>
            <div className=" flex h-7 w-7 items-center justify-center rounded-full bg-purple-700">
              <TbTriangleFilled className="h-3 w-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
