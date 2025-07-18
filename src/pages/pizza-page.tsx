import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useMemo, useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { pizzaData, sectionTitles } from "../data/pizza-data/pizza-data";
import type {
  Pizza,
  PizzaSection,
  SectionKey,
} from "../types/pizza-type/pizza-types";

interface AccordionSectionProps {
  sectionKey: SectionKey;
  data: PizzaSection;
  title: string;
  isOpen: boolean;
  onToggle: (section: SectionKey) => void;
}

interface PizzaItemProps {
  pizza: Pizza;
  index: number;
  color: string;
}

const PizzaPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<SectionKey | null>(
    "classiche"
  );

  const toggleSection = useCallback(
    (section: SectionKey) => {
      setOpenSection(openSection === section ? null : section);
    },
    [openSection]
  );

  const sectionKeys = useMemo(() => Object.keys(pizzaData) as SectionKey[], []);

  const PizzaItem: React.FC<PizzaItemProps> = React.memo(
    ({ pizza, index, color }) => (
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        className="group"
      >
        <div
          className={`${
            pizza.isSpecial
              ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-purple-500/30"
              : "bg-gray-700/30 border-gray-600/30"
          } rounded-xl p-4 border hover:border-gray-500/50 transition-all duration-300 hover:bg-gray-700/50`}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3
                className={`font-bold text-lg mb-2 group-hover:text-gray-200 transition-colors ${
                  pizza.isSpecial ? "text-purple-200" : "text-white"
                }`}
              >
                {pizza.name}
              </h3>
              {pizza.ingredients && (
                <p
                  className={`text-sm leading-relaxed ${
                    pizza.isSpecial ? "text-purple-300" : "text-gray-300"
                  }`}
                >
                  {pizza.ingredients}
                </p>
              )}
            </div>
            <div className="ml-4 flex flex-col items-end">
              <div
                className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
              >
                {pizza.price}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  );

  const AccordionSection: React.FC<AccordionSectionProps> = React.memo(
    ({ sectionKey, data, title, isOpen, onToggle }) => {
      const IconComponent = data.icon;

      return (
        <motion.div
          className="mb-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50"
          initial={false}
          animate={{
            scale: isOpen ? 1.02 : 1,
            boxShadow: isOpen
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
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
                <div className="p-6 space-y-4">
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 py-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative pt-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              PIZZE
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Scopri le nostre specialità artigianali preparate con ingredienti
              freschi e di qualità
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Accordion Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {sectionKeys.map((key) => (
              <AccordionSection
                key={key}
                sectionKey={key}
                data={pizzaData[key]}
                title={sectionTitles[key]}
                isOpen={openSection === key}
                onToggle={toggleSection}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
