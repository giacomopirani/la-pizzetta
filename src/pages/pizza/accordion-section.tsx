import { AnimatePresence, motion } from "framer-motion";
import React, { useId, useRef, useState } from "react";

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
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = data.icon;
    const contentId = useId();
    const sectionRef = useRef<HTMLButtonElement>(null);

    // Altezza della tua navbar fissa (modifica questo valore se la tua navbar ha un'altezza diversa)
    const NAVBAR_HEIGHT = 64; // Esempio: 64px per una navbar h-16

    // Rimosso l'useEffect precedente per lo scroll diretto
    // Lo scroll verrà gestito dopo l'animazione di apertura

    const glowBackground =
      sectionKey === "speciali"
        ? "linear-gradient(135deg, #b19173, #f0d9b5)"
        : sectionKey === "giganti"
        ? "linear-gradient(135deg, #4a4a4a, #2a2a2a)"
        : "linear-gradient(135deg, #3a3a3a, #1a1a1a)";

    return (
      <motion.div
        role="region"
        aria-labelledby={`accordion-header-${contentId}`}
        className="mb-6 bg-black rounded-xl overflow-hidden border border-[#AA9782] relative"
        initial={false}
        animate={{
          scale: isOpen ? 1.01 : 1,
          boxShadow: isOpen
            ? "0 20px 40px -12px rgba(0, 0, 0, 0.6)"
            : "0 8px 20px -5px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Glow effect di background */}
        <motion.div
          className="absolute inset-0 rounded-xl blur-xl opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.4 }}
          style={{ background: glowBackground }}
        />

        <motion.button
          ref={sectionRef} // Assegna il riferimento al bottone
          id={`accordion-header-${contentId}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${contentId}`}
          className="w-full p-6 text-left bg-black relative overflow-hidden cursor-pointer transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle(sectionKey);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{
            scale: 1.02,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          {/* Effetto shimmer sottile */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              repeatDelay: 1.5,
            }}
            style={{ transform: "skewX(-20deg)" }}
          />

          {/* Overlay con glassmorphism */}
          <motion.div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            animate={{
              backgroundColor: isHovered
                ? "rgba(0,0,0,0.05)"
                : "rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Icona con animazioni avanzate */}
              <motion.div
                className="bg-white/15 p-3 rounded-lg backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.25)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{
                    rotate: isHovered ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-white" />
                  )}
                </motion.div>
              </motion.div>

              {/* Testo con animazioni staggered */}
              <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
                <motion.h2
                  style={{ fontFamily: "Hoverage, sans-serif" }}
                  className="text-2xl font-black text-[#AA9782] tracking-wider uppercase"
                  whileHover={{
                    scale: 1.02,
                    letterSpacing: "0.1em",
                    textShadow: "0 0 20px rgba(170, 151, 130, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {title}
                </motion.h2>
                <motion.p
                  className="text-white/70 text-sm font-medium mt-1"
                  whileHover={{
                    color: "rgba(255,255,255,0.9)",
                    scale: 1.01,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {data.pizzas.length}{" "}
                  {data.pizzas.length === 1
                    ? "pizza disponibile"
                    : "pizze disponibili"}
                </motion.p>
              </motion.div>
            </div>

            {/* Chevron con animazioni fluide */}
            <motion.div
              className="bg-white/15 p-2 rounded-lg backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.25)",
              }}
              animate={{
                rotate: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={{
                  y: isHovered ? [0, -1, 0] : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                }}
              >
                <FaChevronCircleDown className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>

          {/* Indicatore di stato aperto */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-[#AA9782]/60"
            initial={{ width: 0 }}
            animate={{
              width: isOpen ? "100%" : "0%",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          />

          {/* Effetto hover sottile */}
          <motion.div
            className="absolute inset-0 bg-white/5 rounded-t-xl"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Bordo animato sottile */}
          <motion.div
            className="absolute inset-0 rounded-t-xl border border-transparent"
            animate={{
              borderColor: isHovered
                ? "rgba(170, 151, 130, 0.3)"
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={`accordion-content-${contentId}`}
              role="region"
              aria-labelledby={`accordion-header-${contentId}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
              // Triggera lo scroll solo dopo che l'animazione di apertura è completa
              onAnimationComplete={() => {
                // Aggiungi un piccolo ritardo per assicurarti che il layout DOM sia stabile
                setTimeout(() => {
                  if (isOpen && sectionRef.current) {
                    const rect = sectionRef.current.getBoundingClientRect();
                    const currentScrollY = window.scrollY;

                    const desiredHeaderTopInViewport = NAVBAR_HEIGHT;
                    const currentHeaderTopInViewport = rect.top;
                    const scrollAmount =
                      currentHeaderTopInViewport - desiredHeaderTopInViewport;

                    // Esegui lo scroll solo se l'intestazione non è già nella posizione desiderata
                    // (con una tolleranza di 1px per evitare scroll inutili dovuti a differenze sub-pixel)
                    if (Math.abs(scrollAmount) > 1) {
                      window.scrollTo({
                        top: currentScrollY + scrollAmount,
                        behavior: "smooth",
                      });
                    }
                  }
                }, 50); // Ritardo di 50ms
              }}
            >
              <motion.div
                className="p-6 space-y-3 bg-black/80"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {sectionKey === "giganti" && (
                  <motion.div
                    className="bg-[#AA9782] rounded-lg p-4 mb-6 border border-amber-100"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
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
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <h4 className="text-white font-bold mb-2 tracking-wide">
                      * Base <span className="text-red-700">Pomodoro</span> e
                      Mozzarella
                    </h4>
                  </motion.div>
                )}
                {data.pizzas.map((pizza, index) => (
                  <motion.div
                    key={`${sectionKey}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.05,
                    }}
                  >
                    <PizzaItem pizza={pizza} index={index} color={data.color} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
);

export default AccordionSection;
