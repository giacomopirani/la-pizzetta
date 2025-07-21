import { motion } from "motion/react";
import { SquareLoader } from "react-spinners";

const AppLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fff9da]">
      <div className="flex flex-col items-center gap-4">
        <SquareLoader size={60} color="black" />
        <motion.p
          className="text-xl text-black font-semibold tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Caricamento...
        </motion.p>
      </div>
    </div>
  );
};

export default AppLoader;
