import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import type {
  PizzaSection,
  SectionKey,
} from "../../types/pizza-type/pizza-types";
import PizzaItem from "./pizza-item";

interface AccordionSectionProps {
  sectionKey: SectionKey;
  data: PizzaSection;
  title: string;
  isOpen: boolean;
  onToggle: (section: SectionKey) => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = React.memo(
  ({ sectionKey, data, title, isOpen, onToggle }) => {
    const IconComponent = data.icon;

    return (
      <motion.div
        className="mb-4 bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50"
        initial={false}
        animate={{
          scale: isOpen ? 1.02 : 1,
          boxShadow: isOpen
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.8)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className={`w-full p-6 text-left bg-gradient-to-r ${data.color} hover:opacity-90 transition-opacity duration-300 relative overflow-hidden`}
          onClick={() => onToggle(sectionKey)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-wide">
                  {title}
                </h2>
                <p className="text-white/80 text-sm">
                  {data.pizzas.length}{" "}
                  {data.pizzas.length === 1
                    ? "pizza disponibile"
                    : "pizze disponibili"}
                </p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/20 p-2 rounded-full"
            >
              <FaChevronCircleDown className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 space-y-4 bg-black/60">
                {sectionKey === "giganti" && (
                  <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-4 mb-6 border border-purple-500/30">
                    <h4 className="text-purple-200 font-semibold mb-2">
                      🍕 Pizze Giganti
                    </h4>
                    <p className="text-purple-300 text-sm">
                      Le nostre pizze giganti sono ideali per 3/4 persone, da
                      gustare in compagnia!
                    </p>
                  </div>
                )}
                {data.pizzas.map((pizza, index) => (
                  <PizzaItem
                    key={`${sectionKey}-${index}`}
                    pizza={pizza}
                    index={index}
                    color={data.color}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
);

export default AccordionSection;
