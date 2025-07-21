import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cascioneMain from "../assets/icon-svg/cascione.svg";
import frittiMain from "../assets/icon-svg/fritti.svg";
import paniniMain from "../assets/icon-svg/panini.svg";
import piadineMain from "../assets/icon-svg/piadine.svg";
import pizzeMain from "../assets/icon-svg/pizza.svg";

const categories = [
  {
    mainIcon: pizzeMain,
    label: "PIZZE",
    description: "...",
    route: "/pizze",
  },
  {
    mainIcon: paniniMain,
    label: "PANINI",
    description: "...",
    route: "/panini",
  },
  {
    mainIcon: cascioneMain,
    label: "CASCIONI",
    description: "...",
    route: "/cascioni",
  },
  {
    mainIcon: piadineMain,
    label: "PIADINE",
    description: "...",
    route: "/piadine",
  },
  {
    mainIcon: frittiMain,
    label: "FRITTI",
    description: "...",
    route: "/fritti",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToCategory = (index: number) => {
    const el = itemRefs.current[index];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleArrowClick = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, selectedIndex - 1)
        : Math.min(categories.length - 1, selectedIndex + 1);
    setSelectedIndex(newIndex);
    scrollToCategory(newIndex);
  };

  const handleCategoryClick = (index: number, route: string) => {
    setSelectedIndex(index);
    scrollToCategory(index);
    navigate(route);
  };

  return (
    <section className="bg-black text-white py-28 min-h-[600px] relative overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold uppercase">I nostri menù</h2>
        <div className="mt-4 h-2 w-40 bg-[#b19173] mx-auto rounded" />
      </div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-10 cursor-pointer"
        onClick={() => handleArrowClick("left")}
      >
        <FaChevronLeft />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow z-10 cursor-pointer"
        onClick={() => handleArrowClick("right")}
      >
        <FaChevronRight />
      </motion.button>

      <div
        ref={containerRef}
        className="flex items-center gap-8 py-5 mt-4 px-26 mx-auto max-w-7xl overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              if (el) itemRefs.current[index] = el;
            }}
            className={`text-center max-w-[250px] flex-shrink-0 cursor-pointer transition-all duration-300 ${
              selectedIndex === index ? "scale-110 ring-4 ring-[#b19173]" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCategoryClick(index, cat.route)}
          >
            <div
              className={`w-40 h-40 border-2 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-[#b19173] border-white shadow-[0_0_25px_#b19173]"
                  : "bg-[#777] border-white"
              }`}
            >
              <img
                src={cat.mainIcon}
                alt={`Categoria ${cat.label}`}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
