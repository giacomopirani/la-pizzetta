import { motion } from "framer-motion";
import React from "react";
import {
  frittiNormali,
  frittiSpeciali,
} from "../../data/fritti-data/fritti-data";
import type { Fritto } from "../../types/fritti-type/fritti-types";

import frittiHeaderImage from "../../assets/background-img-menu/fritti.jpg";
import FrittiHeader from "./fritti-header";

const FrittiPage: React.FC = () => {
  const renderSection = (title: string, items: Fritto[]) => (
    <div className="space-y-4">
      <h2
        style={{ fontFamily: "Hoverage, sans-serif" }}
        className="text-3xl font-extrabold uppercase tracking-widest text-[#c7b28c]"
      >
        {title}
      </h2>
      <div className="border-t border-[#c7b28c] pt-4 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start mr-3">
            <div className="flex-1 pr-4">
              <span className="font-bold uppercase text-white break-words">
                {item.title.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
              {item.description && (
                <div className="mt-2 text-sm text-white font-normal">
                  {item.description.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
            <span className="italic text-white flex-shrink-0">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <FrittiHeader backgroundImage={frittiHeaderImage} />

      <div className="container mx-auto px-4 py-12 max-w-3xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-12"
        >
          {renderSection("I FRITTI", frittiNormali)}
          {renderSection("GRAN FRITTO", frittiSpeciali)}
        </motion.div>
      </div>
    </div>
  );
};

export default FrittiPage;
