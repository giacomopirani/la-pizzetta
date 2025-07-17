import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logoPizzetta from "../assets/logo-pizzeria.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D232A] text-gray-300 font-sans">
      <div className="container mx-auto py-12 px-6 lg:px-8">
        {/* Sezione principale del footer con griglia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1. Sezione "La Pizzetta" e Social */}
          <div className="space-y-4">
            <img
              src={logoPizzetta}
              alt="Logo Pizzeria"
              className="w-20 h-auto mb-4"
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Tristique purusus morbi
              nibh nec at vulputate. Turpis tortor nisl imperdiet quis accumsan.
              Ligula netus amet leo ultricies. Neque venenatis magna amet eget
              sagittis leo eam.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* 2. Sezione "Opening Restaurant" */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Opening Restaurant
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Su - We: 09:00am - 10:00pm</li>
              <li>Thu - We: 09:00am - 10:00pm</li>
              <li>Friday: Closed</li>
            </ul>
          </div>

          {/* 3. Sezione "User Link" */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">User Link</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Order Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Payment & Tax
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Sezione "Contact Us" e Iscrizione */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="text-sm">
              <p>543 Country Club Ave,</p>
              <p>NC 27587, London, UK</p>
              <p>+1257 654120</p>
            </div>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-gray-600 py-2 px-3 w-full rounded-l-md focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-[#C8A97E] hover:bg-opacity-90 text-black font-semibold py-2 px-4 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Barra inferiore con Copyright e link */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy;2024 ARK. All right reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
