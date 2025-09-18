'use client';
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import CartList from "./cartList";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleIncrement = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setCart((prev) => {
      const qty = (prev[id] || 0) - 1;
      if (qty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: qty };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} />
      <main className="pt-8 px-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Keranjang Belanja</h1>
        <CartList
          products={products}
          cart={cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </main>
    </div>
  );
}
