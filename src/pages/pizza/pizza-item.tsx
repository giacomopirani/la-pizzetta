import { motion } from "framer-motion";
import React from "react";
import type { Pizza } from "../../types/pizza-type/pizza-types";

interface PizzaItemProps {
  pizza: Pizza;
  index: number;
  color: string;
}

const PizzaItem: React.FC<PizzaItemProps> = React.memo(({ pizza, index }) => {
  const getBackgroundColor = () => {
    if (pizza.isSpecial) {
      return "bg-gray-700/30 border-gray-600/30";
    }
    return "bg-gray-700/30 border-gray-600/30";
  };

  const getTextColor = () => {
    if (pizza.isSpecial) {
      return "text-white";
    }
    return "text-white";
  };

  const getIngredientsColor = () => {
    if (pizza.isSpecial) {
      return "text-white";
    }
    return "text-white";
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group"
    >
      <div
        className={`${getBackgroundColor()} rounded-xl p-4 border hover:border-gray-500/50 transition-all duration-300 hover:bg-gray-700/50`}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {/* Nome pizza in maiuscolo e bold come nel menu */}
            <h3
              className={`font-bold text-lg mb-2 tracking-wide uppercase transition-colors ${getTextColor()}`}
            >
              {pizza.name}
            </h3>

            {/* Ingredienti */}
            {pizza.ingredients && (
              <p className={`text-sm leading-relaxed ${getIngredientsColor()}`}>
                {pizza.ingredients}
              </p>
            )}
          </div>

          {/* Prezzo */}
          <div className="ml-4 flex flex-col items-end">
            <div
              className={`text-xl font-bold bg-white bg-clip-text text-transparent`}
            >
              {pizza.price}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default PizzaItem;
