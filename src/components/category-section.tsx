import { motion } from "framer-motion";
import frittiMain from "../assets/icon-svg/fritti.svg";
import paniniMain from "../assets/icon-svg/panini.svg";
import piadineMain from "../assets/icon-svg/piadine.svg";
import pizzeMain from "../assets/icon-svg/pizza.svg";

import frittiLabel from "../assets/icon-label/fritti.png";
import paniniLabel from "../assets/icon-label/panini.png";
import piadineLabel from "../assets/icon-label/piadine.png";
import pizzeLabel from "../assets/icon-label/pizze.png";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  {
    mainIcon: frittiMain,
    labelImage: frittiLabel,
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
  {
    mainIcon: paniniMain,
    labelImage: paniniLabel,
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
  {
    mainIcon: piadineMain,
    labelImage: piadineLabel,
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
  {
    mainIcon: piadineMain,
    labelImage: piadineLabel,
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
  {
    mainIcon: pizzeMain,
    labelImage: pizzeLabel,
    description:
      "Nisl quam vestibulum ac quam nec au gula Orci variusNisl quam nesti.",
  },
];

export default function CategorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const amount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black text-white py-16 relative overflow-hidden">
      {/* Titolo */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold uppercase">Scegli la categoria</h2>
        <div className="mt-4 h-2 w-40 bg-[#b19173] mx-auto rounded"></div>
      </div>

      {/* Pulsanti Frecce */}
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

      {/* Lista categorie scrollabile */}
      <div
        ref={containerRef}
        className="flex gap-8 px-8 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="text-center min-w-[200px] flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icona circolare */}
            <div className="w-40 h-40 rounded-full bg-[#777] flex items-center justify-center mb-4 mx-auto cursor-pointer">
              <img
                src={cat.mainIcon}
                alt={`Categoria ${index + 1}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Etichetta */}
            <img
              src={cat.labelImage}
              alt={`Etichetta ${index + 1}`}
              width={100}
              height={40}
              className="mx-auto"
            />

            {/* Descrizione */}
            <p className="text-sm mt-2 text-gray-300">{cat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
