import { motion } from "framer-motion";
import React from "react";

interface PizzaHeaderProps {
  backgroundImage?: string;
}

const PizzaHeader: React.FC<PizzaHeaderProps> = ({ backgroundImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-26 overflow-hidden min-h-[400px] flex items-end justify-center pb-0"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center bg-[rgba(0,0,0,0.5)] backdrop-blur-sm rounded-t-lg p-2 px-27 inline-block"
        >
          <p
            className="font-bold text-white border-b-2 border-white/80 mb-3 pb-2"
            style={{ borderColor: "rgba(255,255,255,0.8)" }}
          >
            MENU
          </p>
          <h1
            style={{ fontFamily: "Hoverage, sans-serif" }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg"
          >
            PIZZE
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PizzaHeader;
