"use client";
import Navbar from "./navbar";
import CartList from "./cartList";
import { useEffect } from "react";
import useCartStore from "./store";
import Info from "./components/info"

export default function Home() {
  const {
    isLoading,
    error,
    getProducts,
  } = useCartStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (isLoading) {
    return (
    <Info>
       <div className="text-[var(--luxury-gold)] text-lg">Loading...</div>
    </Info>
    )
  }

  if (error) {
    return (
    <Info>
        <div className="text-red-500">Error: {error}</div>
    </Info>
    )
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--luxury-dark)] pb-10">
      <Navbar />
      <Header />
      <CartList />
    </div>
  );
}

function Header() {
  return (
    <div className="luxury-container mx-4 md:mx-12 md:mb-4 xl:mx-32 xl:mb-4 py-7 px-10 mt-10">
      <div className="luxury-card hidden md:flex justify-between items-center">
        <div className="w-full text-start">
          <span className="text-[var(--luxury-gold)] text-sm font-light tracking-wide">
            Product
          </span>
        </div>
        <div className="flex gap-10 mr-3">
          <div className="w-20 text-center text-[var(--luxury-gold)] text-sm font-light">
            Price
          </div>
          <div className="w-32 text-center text-[var(--luxury-gold)] text-sm font-light">
            Quantity
          </div>
          <div className="w-20 text-center text-[var(--luxury-gold)] text-sm font-bold">
            Total
          </div>
        </div>
      </div>
    </div>
    )
}