import pizzeriaImage from "../assets/pizzeria.png";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${pizzeriaImage})` }}
    >
      <Navbar />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <p className="uppercase text-sm tracking-wide mb-2">
          HELLO, NEW FRIEND
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">ORDINA QUI</h1>
        <div className="flex gap-4">
          <button className="bg-[#d5bfa2] hover:bg-[#cbb393] text-black px-6 py-3 rounded-full font-semibold transition">
            RISERVA UN TAVOLO
          </button>
          <button className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-full font-semibold transition">
            MENU ONLINE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
