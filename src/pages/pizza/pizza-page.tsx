import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { pizzaData, sectionTitles } from "../../data/pizza-data/pizza-data";
import type { SectionKey } from "../../types/pizza-type/pizza-types";
import AccordionSection from "./accordion-section";
import PizzaHeader from "./pizza-header";

import pizzaHeaderImage from "../../assets/background-img-menu/pizza4.jpg";

interface PizzaPageProps {
  headerBackgroundImage?: string;
}

const PizzaPage: React.FC<PizzaPageProps> = ({ headerBackgroundImage }) => {
  const [openSection, setOpenSection] = useState<SectionKey | null>(null);
  const [scrollTarget, setScrollTarget] = useState<SectionKey | null>(null);

  const handleToggle = (section: SectionKey) => {
    if (section === openSection) {
      setOpenSection(null); // Chiudo
    } else {
      setOpenSection(null); // Prima chiudo quella aperta
      setScrollTarget(section); // Segno quella da aprire dopo
    }
  };

  // Poi, con un effetto, apri la nuova sezione DOPO la chiusura di quella vecchia
  useEffect(() => {
    if (!openSection && scrollTarget) {
      // Ritardo l’apertura per permettere l’animazione di chiusura
      const timeout = setTimeout(() => {
        setOpenSection(scrollTarget);
        setScrollTarget(null);
      }, 300); // Durata dell'uscita dell’accordion (match con framer-motion)

      return () => clearTimeout(timeout);
    }
  }, [openSection, scrollTarget]);

  const sectionKeys = Object.keys(pizzaData) as SectionKey[];

  return (
    <div className="min-h-screen bg-black">
      <PizzaHeader
        backgroundImage={headerBackgroundImage || pizzaHeaderImage}
      />

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
                onToggle={handleToggle}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
