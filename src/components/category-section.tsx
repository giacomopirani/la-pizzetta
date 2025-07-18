import { motion } from "framer-motion";
import cascioneMain from "../assets/icon-svg/cascione.svg";
import frittiMain from "../assets/icon-svg/fritti.svg";
import paniniMain from "../assets/icon-svg/panini.svg";
import piadineMain from "../assets/icon-svg/piadine.svg";
import pizzeMain from "../assets/icon-svg/pizza.svg";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  {
    mainIcon: pizzeMain,
    label: "PIZZE",
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
  {
    mainIcon: paniniMain,
    label: "PANINI",
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
  {
    mainIcon: cascioneMain,
    label: "CASCIONI",
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
  {
    mainIcon: piadineMain,
    label: "PIADINE",
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
  {
    mainIcon: frittiMain,
    label: "FRITTI",
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
];

const CategorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const amount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black text-white py-18 relative overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold uppercase">Scegli la categoria</h2>
        <div className="mt-4 h-2 w-40 bg-[#b19173] mx-auto rounded"></div>
      </div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-10 cursor-pointer"
        onClick={() => scroll("left")}
      >
        <FaChevronLeft />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-10 cursor-pointer"
        onClick={() => scroll("right")}
      >
        <FaChevronRight />
      </motion.button>

      <div
        ref={containerRef}
        className="flex gap-8 pt-6 px-8 mr-6 ml-6 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="text-center max-w-[250px] flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-40 h-40 border-2 border-white rounded-full bg-[#777] flex items-center justify-center mb-4 mx-auto cursor-pointer">
              <img
                src={cat.mainIcon}
                alt={`Categoria ${index + 1}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <p
              style={{ fontFamily: "Hoverage, sans-serif", fontSize: "28px" }}
              className="mx-auto text-center text-[#AA9782]"
            >
              {cat.label}
            </p>

            <p className="text-sm mt-2 text-gray-300">{cat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
