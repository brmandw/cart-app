'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import useCartStore from "./store";

export default function Navbar() {
  const cartTotal = useCartStore((state) => state.cartTotal());
  console.log(cartTotal)
  return (
    <nav className="flex justify-between items-center p-4 px-10 bg-white shadow-md">
      <h2>OwlShop</h2>
      <div className="relative">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="lg:mr-3 mt-2 text-2xl text-black"
        />
        <span className="absolute -top-1 -right-4 lg:-right-1 bg-red-500 border-2 border-white text-white text-xs w-7 h-5 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-75">
          { cartTotal }
        </span>
      </div>
    </nav>
  );
}
