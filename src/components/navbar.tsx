import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoAlto from "../assets/logo-alto.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/75 shadow-xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">
        {/* Logo */}
        <Link to="/">
          <img
            src={logoAlto}
            alt="Logo pizzeria"
            className="w-[150px] tracking-widest"
          />
        </Link>

        {/* Link navigazione */}
        <div className="hidden md:flex gap-8 text-lg">
          {["pizze", "panini", "cascioni", "piadine", "fritti"].map((route) => (
            <Link
              key={route}
              to={`/${route}`}
              className="relative group transition-all duration-200 ease-in-out"
            >
              <span className="group-hover:text-[#AA9782] transition-colors">
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#AA9782] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Pulsanti azione */}
        <div className="flex items-center gap-3">
          {/* Bottone telefono */}
          <a
            href="tel:+3905411491541"
            className="flex items-center gap-2 bg-green-600 ml-4 px-3 py-2 rounded-[3px] text-sm font-medium hover:bg-green-800 transition-colors"
          >
            <FiPhone className="text-white" />
            <span className="text-white">Chiama</span>
          </a>

          {/* Pulsante ordina */}
          <a
            href="https://lapizzettacattolica.xmenu.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#AA9782] text-white px-4 py-2 rounded-[3px] font-medium text-sm hover:bg-[#846945] transition-colors"
          >
            Ordina
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
