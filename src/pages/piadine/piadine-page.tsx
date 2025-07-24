import { motion } from "framer-motion";
import React from "react";
import piadineHeaderImage from "../../assets/background-img-menu/piadina.jpg";
import {
  piadineClassiche,
  piadineSpeciali,
} from "../../data/piadine-data/piadine-data";
import type { Piadina } from "../../types/piadine-type/piadine-types";
import PiadinaHeader from "./piadine-header";

const renderSection = (title: string, items: Piadina[]) => (
  <div className="space-y-4">
    <h2
      style={{ fontFamily: "Hoverage, sans-serif" }}
      className="text-3xl font-extrabold uppercase tracking-widest text-[#c7b28c]"
    >
      {title}
    </h2>
    <div className="border-t border-[#c7b28c] pt-4 space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-start mr-6">
          <span className="font-bold uppercase text-white break-words">
            {item.title.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </span>
          <span className="italic text-white">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function PiadinePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PiadinaHeader backgroundImage={piadineHeaderImage} />

      <div className="container mx-auto px-4 py-12 max-w-3xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-12"
        >
          {renderSection("PIADINE", piadineClassiche)}
          {renderSection("LE NOSTRE PIADE", piadineSpeciali)}
        </motion.div>
      </div>
    </div>
  );
}
