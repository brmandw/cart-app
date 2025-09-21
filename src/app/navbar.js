'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ cartTotal = 0 }) {
  return (
    <nav className="flex justify-between items-center p-4 px-10 bg-white shadow-md">
      <h2>OwlShop</h2>
      <div className="relative">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="lg:mr-4 mt-2 text-2xl text-black"
        />
        <span className="absolute -top-1 -right-5 lg:-right-1 bg-red-500 border-2 border-white text-white text-xs w-9 h-5 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-75">
          { cartTotal }
        </span>
      </div>
    </nav>
  );
}
