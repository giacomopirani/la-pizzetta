import { motion } from "motion/react";
import { FaClock, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import logoPizzetta from "../assets/logo-pizzeria.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D232A] text-gray-300 font-sans">
      <div className="text-center mb-4 pt-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          orari e info
        </motion.h2>
        <motion.div
          className="mt-3 h-1.5 w-32 bg-[#b19173] mx-auto rounded"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
      <div className="container mx-auto py-12 px-6 lg:px-8">
        {/* Sezione principale del footer con griglia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* 1. Sezione "La Pizzetta" e Social */}
          <div className="space-y-4 text-left">
            <img
              src={logoPizzetta}
              alt="Logo Pizzeria"
              className="w-20 h-auto mb-4"
            />
            {/* 2. Sezione "Opening Restaurant" */}
            <div className="space-y-4 text-left">
              <ul className="space-y-2 text-md gap-4">
                <li className="text-bold uppercase flex gap-4 justify-start md:mb-4">
                  <FaClock size={23} />
                  aperti tutti i giorni <br className="md:hidden" /> dalle 18:30
                  alle 22:00
                </li>
                <li className="text-bold flex gap-4 justify-start mb-5">
                  <IoIosPhonePortrait size={25} />
                  3387457432
                </li>
                <li className="text-bold flex gap-5 justify-start mb-4">
                  <FaPhone size={18} /> 0541 1491541
                </li>
                <li className="text-bold flex gap-4 justify-start">
                  <TbWorldWww size={25} />
                  www.lapizzettacattolica.it
                </li>
              </ul>
            </div>
            <div className="flex space-x-4 justify-start">
              <a
                href="https://www.facebook.com/lapizzettacattolica/?locale=it_IT"
                aria-label="Facebook"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/lapizzettacattolica/"
                aria-label="Instagram"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* 3. Sezione "Contact Us" e Iscrizione */}
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-semibold text-white">Contattaci</h3>
            <div className="text-sm">
              <p>Via Giuseppe di Vittorio,9 - Cattolica(RN) 47841</p>
              <p>Tel. 0541 1491541</p>
            </div>
          </div>
        </div>

        {/* Barra inferiore con Copyright e link */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy; La Pizzetta. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
