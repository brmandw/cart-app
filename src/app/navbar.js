"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "./store";

export default function Navbar() {
  const { cartCount } = useCartStore()

  return (
    <nav className="flex justify-between items-center p-4 px-6 md:px-10 bg-[var(--luxury-dark)] text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <h2
        className="text-xl md:text-2xl font-light tracking-wider"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span className="text-[var(--luxury-gold)]">Owl</span>Shop
      </h2>
      <div className="relative">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="text-xl md:text-2xl md:mr-2 text-white transition-colors duration-200 cursor-pointer"
        />
        <span className="absolute -top-2 -right-3 md:-right-1 bg-[var(--luxury-gold)] text-[var(--luxury-dark)] text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold ">
          {cartCount}
        </span>
      </div>
    </nav>
  );
}
