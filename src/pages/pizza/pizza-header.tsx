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
      className="relative py-12 overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative pt-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            PIZZE
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Scopri le nostre specialità artigianali preparate con ingredienti
            freschi e di qualità
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PizzaHeader;
