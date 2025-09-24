"use client";
import Navbar from "./navbar";
import CartList from "./cartList";
import { useEffect } from "react";
import useCartStore from "./store";

export default function Home() {
  const { products, isLoading, error, getProducts } = useCartStore()

  useEffect(() => {
    getProducts()
  }, []);

  if (isLoading) {
    return <div>Memuat produk...</div>;
  }

  if (error) {
    return <div>Terjadi kesalahan: {error}</div>;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--luxury-dark)] pb-10">

      <div className="mt-5 mx-8 xl:mx-28 xl:px-20 lg:mx-23 lg:px-8 hidden md:flex lg:flex xl:flex justify-between luxury-card">
        {/* Image*/}
        <div className="w-15 h-15 xl:w-20 xl:h-20 flex items-center justify-center">
          <div className="text-center luxury-label">Product</div>
        </div>

        {/* Price counter and total for larger screen */}
        <div className="hidden md:flex lg:flex xl:flex gap-8 justify-center items-center">
          <div className="w-24 text-sm text-center ">
            <div className="w-35 text-center pl-4 luxury-label">Price</div>
          </div>
          <div className="flex items-center ">
            <div className="w-40 text-center luxury-label">Quantities</div>
          </div>
          <div className="w-24 text-sm font-bold text-center">
            <div className="w-35 text-left pl-4 luxury-label">Total</div>
          </div>
        </div>
      </div>
      <CartList />

    </div>
  );
}
