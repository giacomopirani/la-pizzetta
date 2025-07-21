import { Link } from "react-router-dom";
import logoAlto from "../assets/logo-alto.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/75 bg-opacity-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">
        <Link to="/">
          <img
            src={logoAlto}
            alt="Logo pizzeria"
            className="w-[150px] tracking-widest"
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/pizze">Pizze</Link>
          <Link to="/panini">Panini</Link>
          <a href="#">Fritti</a>
          <a href="#">Contact</a>
          <a href="#">Dove siamo</a>
        </nav>
        <button className="bg-[#AA9782] text-white px-4 py-2 rounded-[3px] font-medium text-sm hover:bg-[#846945] transition-colors">
          RESERVATION
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
