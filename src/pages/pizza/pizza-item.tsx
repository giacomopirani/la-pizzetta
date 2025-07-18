import { motion } from "framer-motion";
import React from "react";
import type { Pizza } from "../../types/pizza-type/pizza-types";

interface PizzaItemProps {
  pizza: Pizza;
  index: number;
  color: string;
}

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
            ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-yellow-200"
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

export default PizzaItem;
