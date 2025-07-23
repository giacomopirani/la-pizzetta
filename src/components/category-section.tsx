import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cascioneMain from "../assets/icon-svg/cascione.svg";
import frittiMain from "../assets/icon-svg/fritti.svg";
import paniniMain from "../assets/icon-svg/panini.svg";
import piadineMain from "../assets/icon-svg/piadine.svg";
import pizzeMain from "../assets/icon-svg/pizza.svg";

const categories = [
  { mainIcon: pizzeMain, label: "PIZZE", description: "...", route: "/pizze" },
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
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showArrows, setShowArrows] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleCategoryClick = (index: number, route: string) => {
    setClickedIndex(index);

    setTimeout(() => {
      setClickedIndex(null);
      navigate(route);
    }, 400);
  };

  const checkScrollPosition = () => {
    if (containerRef.current && isMobile) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px tolerance
    }
  };

  const scrollToDirection = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const currentScroll = containerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const checkIfMobile = () => {
    const mobile = window.innerWidth < 768; // md breakpoint
    setIsMobile(mobile);
    return mobile;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const mobile = checkIfMobile();

      if (mobile) {
        // Check initial scroll position for mobile
        checkScrollPosition();

        // Check if content overflows (needs scrolling) for mobile
        const needsScroll = container.scrollWidth > container.clientWidth;
        setShowArrows(needsScroll);

        // Add scroll event listener for mobile
        container.addEventListener("scroll", checkScrollPosition);
      } else {
        // For desktop, hide arrows since content is centered
        setShowArrows(false);
        setCanScrollLeft(false);
        setCanScrollRight(false);
      }

      // Add resize listener to recheck on window resize
      const handleResize = () => {
        const mobile = checkIfMobile();

        if (mobile) {
          const needsScroll = container.scrollWidth > container.clientWidth;
          setShowArrows(needsScroll);
          checkScrollPosition();
        } else {
          setShowArrows(false);
          setCanScrollLeft(false);
          setCanScrollRight(false);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isMobile]);

  return (
    <section className="bg-black text-white py-24 min-h-[500px] relative overflow-hidden">
      <div className="text-center mb-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          scegli la categoria
        </motion.h2>
        <motion.div
          className="mt-3 h-1.5 w-32 bg-[#b19173] mx-auto rounded"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Categories Container */}
      <motion.div
        ref={containerRef}
        className={`flex items-center gap-6 py-4 mt-6 px-4 md:px-16 mx-auto max-w-7xl
          ${
            isMobile
              ? "overflow-x-auto no-scrollbar scroll-snap-x snap-mandatory"
              : "justify-center overflow-visible"
          }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {categories.map((cat, index) => {
          const isClicked = clickedIndex === index;

          return (
            <motion.div
              key={index}
              className={`text-center max-w-[180px] md:max-w-[250px] cursor-pointer
                ${isMobile ? "snap-center flex-shrink-0" : "flex-shrink-0"}
              `}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(index, cat.route)}
            >
              {/* Main category circle */}
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 border-2 border-white rounded-full flex items-center justify-center mb-3 mx-auto relative overflow-hidden"
                animate={{
                  backgroundColor: isClicked ? "#b19173" : "#777",
                  scale: isClicked ? [1, 1.1, 1.05] : 1,
                  boxShadow: isClicked
                    ? "0 0 30px rgba(177, 145, 115, 0.8), 0 0 60px rgba(177, 145, 115, 0.4)"
                    : "none",
                }}
                transition={{
                  duration: isClicked ? 0.4 : 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Ripple effect */}
                {isClicked && (
                  <motion.div
                    className="absolute inset-0 bg-[#b19173] rounded-full"
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{
                      scale: [0, 1.5, 2],
                      opacity: [0.8, 0.3, 0],
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                )}

                <motion.img
                  src={cat.mainIcon}
                  alt={`Categoria ${cat.label}`}
                  width={60}
                  height={60}
                  className="object-contain relative z-10"
                  animate={{
                    scale: isClicked ? [1, 1.2, 1.1] : 1,
                    rotate: isClicked ? [0, 5, -5, 0] : 0,
                    filter: isClicked
                      ? "brightness(1.3) drop-shadow(0 0 10px rgba(255,255,255,0.7))"
                      : "brightness(1)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </motion.div>

              {/* Category label */}
              <motion.p
                style={{ fontFamily: "Hoverage, sans-serif", fontSize: "22px" }}
                className="mx-auto text-center text-[#AA9782]"
                animate={{
                  color: isClicked ? "#ffffff" : "#AA9782",
                  scale: isClicked ? [1, 1.1, 1.05] : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {cat.label}
              </motion.p>

              {/* Burst effect particles */}
              {isClicked && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#b19173] rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      initial={{
                        scale: 0,
                        x: 0,
                        y: 0,
                        opacity: 1,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        x: Math.cos((i * Math.PI * 2) / 8) * 60,
                        y: Math.sin((i * Math.PI * 2) / 8) * 60,
                        opacity: [1, 1, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation Controls - Solo per mobile */}
      <AnimatePresence>
        {showArrows && isMobile && (
          <motion.div
            className="flex items-center justify-center mt-6 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left Arrow */}
            <AnimatePresence>
              {canScrollLeft ? (
                <motion.button
                  className="bg-[#b19173] hover:bg-[#9d7f63] text-white p-2 rounded-full shadow-lg transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToDirection("left")}
                  aria-label="Scorri verso sinistra"
                >
                  <FaArrowAltCircleLeft size={24} />
                </motion.button>
              ) : (
                <div className="w-9 h-9" />
              )}
            </AnimatePresence>

            {/* Dots Indicators */}
            <div className="flex gap-3">
              <motion.div
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  canScrollLeft ? "bg-[#b19173]" : "bg-gray-600"
                }`}
                animate={{ scale: canScrollLeft ? 1.2 : 1 }}
              />
              <motion.div
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  canScrollRight ? "bg-[#b19173]" : "bg-gray-600"
                }`}
                animate={{ scale: canScrollRight ? 1.2 : 1 }}
              />
            </div>

            {/* Right Arrow */}
            <AnimatePresence>
              {canScrollRight ? (
                <motion.button
                  className="bg-[#b19173] hover:bg-[#9d7f63] text-white p-2 rounded-full shadow-lg transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToDirection("right")}
                  aria-label="Scorri verso destra"
                >
                  <FaArrowAltCircleRight size={24} />
                </motion.button>
              ) : (
                <div className="w-9 h-9" />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CategorySection;
