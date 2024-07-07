"use client";
import { useAtom } from "jotai";
import { Resulttoggle } from "./Reusedfunction";
import ChartDashboard from "./ChartDashboard";
import Resultpage from "./Resultpage";
import { motion, AnimatePresence } from "framer-motion";

function Dashboard() {
  const [Navtoggle, _] = useAtom(Resulttoggle);

  return (
    <div className="w-full bg-[#050C30] px-2 scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      <div className="container mx-auto">
        <AnimatePresence mode="wait">
          {Navtoggle ? (
            <motion.div
              key="chartDashboard"
              initial={{ opacity: 0, y: -100, scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -100, scale: 0 }}
              transition={{ duration: 1 }}
            >
              <ChartDashboard />
            </motion.div>
          ) : (
            <motion.div
              key="resultPage"
              initial={{ opacity: 0, y: -100, scale:1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -100, scale: 0 }}
              transition={{ duration: 1 }}
            >
              <Resultpage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Dashboard;
