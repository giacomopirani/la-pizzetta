import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useEffect, useId, useRef, useState } from "react";
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

const AccordionSection: React.FC<AccordionSectionProps> = ({
  sectionKey,
  data,
  title,
  isOpen,
  onToggle,
}) => {
  const IconComponent = data.icon;
  const contentId = useId();
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollableContentRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const NAVBAR_HEIGHT = 90;

  const categoriesWithScrollIndicator: SectionKey[] = [
    "classiche",
    "speciali",
    "bianche",
    "fornarine",
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    onToggle(sectionKey);
  };

  useEffect(() => {
    if (isOpen && headerRef.current) {
      const doScroll = () => {
        const headerTop =
          headerRef.current!.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = headerTop - NAVBAR_HEIGHT;
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      };

      requestAnimationFrame(() => {
        setTimeout(doScroll, 50);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const checkScrollability = () => {
      if (scrollableContentRef.current) {
        const { scrollHeight, clientHeight } = scrollableContentRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    checkScrollability();

    window.addEventListener("resize", checkScrollability);

    const timeout = setTimeout(checkScrollability, 500);

    return () => {
      window.removeEventListener("resize", checkScrollability);
      clearTimeout(timeout);
    };
  }, [isOpen, data.pizzas.length]);

  const shouldShowScrollIndicator =
    isScrollable && categoriesWithScrollIndicator.includes(sectionKey);

  return (
    <motion.div
      className="bg-black rounded-xl border border-[#AA9782] overflow-hidden"
      whileHover={{
        scale: 1.005,
        boxShadow: "0 10px 30px -5px rgba(170, 151, 130, 0.2)",
      }}
      animate={{
        scale: isOpen ? 1.01 : 1,
        boxShadow: isOpen
          ? "0 15px 35px -5px rgba(170, 151, 130, 0.3)"
          : "0 5px 15px -3px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div ref={headerRef}>
        <motion.button
          id={`accordion-header-${contentId}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${contentId}`}
          className="w-full p-3 pt-4 text-left bg-black transition-colors duration-200 relative overflow-hidden"
          onClick={handleClick}
          whileTap={{ scale: 0.995 }}
          // Nuovo effetto hover per la categoria
          whileHover={{
            backgroundColor: "#1a1a1a", // Nero leggermente più chiaro
            boxShadow: "0 0 20px rgba(170, 151, 130, 0.4)", // Bagliore dorato
            y: -2, // Leggero sollevamento
          }}
          transition={{ duration: 0.2, ease: "easeOut" }} // Transizione per l'hover
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#AA9782]/5 via-[#AA9782]/10 to-[#AA9782]/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                className="bg-white/15 p-3 rounded-lg"
                animate={{
                  backgroundColor: isOpen
                    ? "rgba(170, 151, 130, 0.3)"
                    : "rgba(255,255,255,0.15)",
                  scale: isOpen ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {IconComponent && (
                  <motion.div
                    animate={{ rotate: isOpen ? [0, -10, 10, 0] : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                )}
              </motion.div>
              <div>
                <motion.h2
                  style={{ fontFamily: "Hoverage, sans-serif" }}
                  className="text-2xl font-black text-[#AA9782] tracking-wider uppercase"
                  animate={{
                    color: isOpen ? "#f0d9b5" : "#AA9782",
                    textShadow: isOpen
                      ? "0 0 20px rgba(170, 151, 130, 0.4)"
                      : "none",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {title}
                </motion.h2>
                <motion.p
                  className="text-white/70 text-sm font-medium mt-1"
                  animate={{
                    color: isOpen
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.7)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {data.pizzas.length}{" "}
                  {data.pizzas.length === 1
                    ? "pizza disponibile"
                    : "pizze disponibili"}
                </motion.p>
              </div>
            </div>
            <motion.div
              className="bg-white/15 p-2 rounded-lg"
              animate={{
                rotate: isOpen ? 180 : 0,
                backgroundColor: isOpen
                  ? "rgba(170, 151, 130, 0.3)"
                  : "rgba(255,255,255,0.15)",
                scale: isOpen ? 1.1 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <FaChevronCircleDown className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <motion.div
            className="mt-4 h-1 bg-[#AA9782]/60 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: isOpen ? "100%" : "0%",
              backgroundColor: isOpen ? "#f0d9b5" : "rgba(170, 151, 130, 0.6)",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`accordion-content-${contentId}`}
            className="bg-black/80 overflow-hidden relative"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: "easeOut" },
              opacity: { duration: 0.3, delay: 0.1 },
            }}
          >
            <motion.div
              className="p-6 space-y-3"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              {sectionKey === "giganti" && (
                <motion.div
                  className="bg-[#AA9782] rounded-lg p-4 mb-6 border border-amber-100"
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                >
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wide">
                    🍕 Pizze Giganti
                  </h4>
                  <p className="text-white text-sm">
                    Le nostre pizze giganti sono ideali per 3/4 persone, da
                    gustare in compagnia!
                  </p>
                </motion.div>
              )}
              {sectionKey === "speciali" && (
                <motion.div
                  className="bg-[#AA9782] rounded-lg p-4 mb-6 border border-white"
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                >
                  <h4 className="text-white font-bold mb-2 tracking-wide">
                    * Base <span className="text-red-700">Pomodoro</span> e
                    Mozzarella
                  </h4>
                </motion.div>
              )}
              <motion.div
                className="max-h-[400px] overflow-y-auto" // Rimosso 'relative' da qui
                ref={scrollableContentRef} // Assegna il ref qui
              >
                {data.pizzas.map((pizza, index) => (
                  <motion.div
                    key={`${sectionKey}-${pizza.name}-${index}`}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <PizzaItem pizza={pizza} index={index} color={data.color} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            {shouldShowScrollIndicator && (
              <>
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
                <motion.div
                  className="absolute top-0 left-0 right-0 text-center text-white text-sm flex items-center justify-center space-x-1 pointer-events-none pt-0.5 pb-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <span>Scorri per vedere altro</span>
                  <FaChevronCircleDown className="w-4 h-4 animate-bounce" />
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionSection;
