import { motion } from "framer-motion";
import { FaAppStoreIos, FaChevronDown, FaGooglePlay } from "react-icons/fa";
import pizzeriaImage from "../assets/home3.jpg";
import logoPizzetta from "../assets/logo-pizzeria.png";
import CategorySection from "../components/category-section";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <>
      <motion.div
        className="h-screen bg-cover bg-center relative inset-0 pt-20"
        style={{ backgroundImage: `url(${pizzeriaImage})` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 pt-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={logoPizzetta}
            alt="Logo Pizzeria"
            className="w-40 h-auto mx-auto mb-4 drop-shadow-lg"
            variants={fadeUp}
          />

          <motion.p
            className="uppercase text-xl tracking-wide mb-4 border-t-4 border-[#d7b07d] pt-2"
            variants={fadeUp}
          >
            HELLO
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-8 leading-snug"
            variants={fadeUp}
          >
            Dove ogni{" "}
            <span style={{ fontFamily: "Hoverage, sans-serif" }}>
              “Pizzetta”
            </span>
            <br />è fatta con amore.
          </motion.h1>

          <motion.div
            className="flex flex-col items-center gap-2 text-white mb-8"
            variants={fadeUp}
          >
            <p className="text-md font-bold">
              SCARICA L'APP <br />
              <span className="text-md font-bold">
                5€ di sconto sul tuo primo ordine
              </span>
            </p>

            <div className="flex gap-4 mt-2">
              <motion.a
                href="https://apps.apple.com/it/app/la-pizzetta/id1376665567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-[#d7b07d] text-white px-5 py-3 border border-white rounded-[5px] font-semibold transition-all backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <FaAppStoreIos size={20} />
                App Store
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=it.xmenu.pizzetta&hl=it&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-[#d7b07d] text-white px-5 py-3 border border-white rounded-[5px] font-semibold transition-all backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <FaGooglePlay size={20} />
                Play Store
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="mt-2 text-[#AA9782]"
            animate={{ y: [0, 15, 0], opacity: [1, 0.6, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            <FaChevronDown size={60} />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <CategorySection />
      </motion.div>
    </>
  );
};

export default HomePage;
