import { motion } from "framer-motion";
import React from "react";
import { paniniData } from "../../data/panini-data/panini-data";

import paniniHeaderImage from "../../assets/background-img-menu/panino.jpg";
import PaninoHeader from "./panini-header";

const PaniniPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <PaninoHeader backgroundImage={paniniHeaderImage} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8 bg-black text-white rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2
              style={{ fontFamily: "Hoverage, sans-serif" }}
              className="text-3xl font-bold text-left mb-2 text-[#AA9782]"
            >
              PANINI
            </h2>

            <p className="text-left italic text-xl text-white mb-8">
              Serviti con patatine fritte
            </p>
            <p className="text-right italic text-xl text-white mb-8">€ 13,50</p>

            <div className="space-y-6">
              {paniniData.map((panino, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-xl font-bold uppercase text-[#AA9782]">
                    {panino.title}
                  </h3>
                  <p className="text-white">{panino.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PaniniPage;
