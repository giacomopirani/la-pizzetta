import { motion } from "framer-motion";
import React from "react";
import {
  cascioniNormali,
  cascioniSpeciali,
} from "../../data/cascioni-data/cascioni-data";
import type { Cascione } from "../../types/cascioni-type/cascioni-types";

import cascioniHeaderImage from "../../assets/background-img-menu/cascione.jpg";
import CascioneHeader from "./cascioni-header";

const CascioniPage: React.FC = () => {
  const renderSection = (title: string, items: Cascione[]) => (
    <div className="space-y-4">
      <h2 className="text-3xl font-extrabold uppercase tracking-widest text-[#c7b28c]">
        {title}
      </h2>
      <div className="border-t border-[#c7b28c] pt-4 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <span className="font-bold uppercase text-white">{item.title}</span>
            <span className="italic text-white">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <CascioneHeader backgroundImage={cascioniHeaderImage} />

      <div className="container mx-auto px-4 py-12 max-w-3xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-12"
        >
          {renderSection("CASCIONI", cascioniNormali)}
          {renderSection("CASCIONI SPECIALI", cascioniSpeciali)}
        </motion.div>
      </div>
    </div>
  );
};

export default CascioniPage;
