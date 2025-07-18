import { motion } from "framer-motion";
import React, { useCallback, useMemo, useState } from "react";
import { pizzaData, sectionTitles } from "../../data/pizza-data/pizza-data";
import type { SectionKey } from "../../types/pizza-type/pizza-types";
import AccordionSection from "./accordion-section";
import PizzaHeader from "./pizza-header";

import pizzaHeaderImage from "../../assets/pizza-background/pizza.jpg";

interface PizzaPageProps {
  headerBackgroundImage?: string;
}

const PizzaPage: React.FC<PizzaPageProps> = ({ headerBackgroundImage }) => {
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

  return (
    <div className="min-h-screen bg-white">
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
