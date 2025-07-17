import logoAlto from "../assets/logo-alto.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/65 bg-opacity-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">
        <img
          src={logoAlto}
          alt="Logo pizzeria"
          className="w-[150px] tracking-widest"
        />
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#">Home</a>
          <a href="#">Pizze</a>
          <a href="#">Panini</a>
          <a href="#">Fritti</a>
          <a href="#">Contact</a>
          <a href="#">Shop</a>
        </nav>
        <button className="bg-[#d5bfa2] text-white px-4 py-2 rounded-[3px] font-medium text-sm hover:bg-[#b28d5d] transition">
          RESERVATION
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
