import { motion } from "motion/react";
import { FaChevronDown } from "react-icons/fa";
import logoPizzetta from "../assets/logo-pizzeria.png";
import pizzeriaImage from "../assets/pizzeria.png";
import CategorySection from "../components/category-section";

const HomePage = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative inset-0 bg-black opacity-80 pt-20 "
        style={{ backgroundImage: `url(${pizzeriaImage})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 pt-25">
          <img
            src={logoPizzetta}
            alt="Logo Pizzeria"
            className="w-40 h-auto mx-auto mb-4"
          />
          <p className="uppercase text-xl tracking-wide mb-6 pt-1 border-t border-[#d7b07d]">
            HELLO, NEW FRIEND
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-10">ORDINA QUI</h1>
          <div className="flex gap-4">
            <button className="bg-transparent hover:bg-[#d7b07d] text-white px-6 py-3 border border-white rounded-[3px] font-semibold transition cursor-pointer">
              SCARICA L'APP
            </button>
            <button className="bg-transparent hover:border-b-2 border-white text-white px-6 py-3 rounded-[3px] font-semibold transition cursor-pointer">
              ORDINA SU xMenu
            </button>
          </div>
          <motion.div
            className="mt-16 text-[#AA9782]"
            animate={{
              y: [0, 15, 0],
              opacity: [1, 0.6, 1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            <FaChevronDown size={100} />
          </motion.div>
        </div>
      </div>
      <CategorySection />
    </>
  );
};

export default HomePage;
