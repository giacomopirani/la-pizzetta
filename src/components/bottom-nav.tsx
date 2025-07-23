import { GoHomeFill } from "react-icons/go";
import { NavLink, useLocation } from "react-router-dom";
import cascioniIcon from "../assets/icon-svg/cascione.svg";
import frittiIcon from "../assets/icon-svg/fritti.svg";
import paniniIcon from "../assets/icon-svg/panini.svg";
import piadineIcon from "../assets/icon-svg/piadine.svg";
import pizzaIcon from "../assets/icon-svg/pizza.svg";

const navItems = [
  {
    path: "/",
    label: "Home",
    component: <GoHomeFill size={22} />,
    type: "component",
  },
  { path: "/pizze", label: "Pizze", icon: pizzaIcon, type: "image" },
  { path: "/panini", label: "Panini", icon: paniniIcon, type: "image" },
  { path: "/cascioni", label: "Cascioni", icon: cascioniIcon, type: "image" },
  { path: "/piadine", label: "Piadine", icon: piadineIcon, type: "image" },
  { path: "/fritti", label: "Fritti", icon: frittiIcon, type: "image" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white flex justify-around items-center py-2 md:hidden border-t border-neutral-700">
      {navItems.map(({ path, label, icon, component, type }) => {
        const isActive = location.pathname === path;
        return (
          <NavLink
            key={path}
            to={path}
            className={`flex flex-col items-center text-xs ${
              isActive ? "text-[#AA9782]" : "text-white hover:text-[#AA9782]"
            }`}
          >
            <div className="text-lg mb-1">
              {type === "component" ? (
                <div className={isActive ? "text-[#AA9782]" : "text-white"}>
                  {component}
                </div>
              ) : (
                <img
                  src={icon}
                  alt={label}
                  className="w-6 h-6"
                  style={{
                    filter: isActive
                      ? "brightness(0) saturate(100%) invert(67%) sepia(13%) saturate(26%) hue-rotate(17deg) brightness(95%) contrast(89%)"
                      : "brightness(0) saturate(100%) invert(100%)",
                  }}
                />
              )}
            </div>
            <span>{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNav;
