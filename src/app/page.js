"use client";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import CartList from "./cartList";
import useCartStore from "./store";

export default function Home() {
  const items = useCartStore((state) => state.items);
  const quantities = useCartStore((state) => state.quantities);
  const setItems = useCartStore((state) => state.setItems);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const cartTotal = Object.values(quantities).reduce((a, b) => a + b, 0);

  useEffect(() => {
    const getItems = async () => {
      const { data } = await axios("https://fakestoreapi.com/products?limit=5");
      setItems(data);
    };
    getItems();
  }, [setItems]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--luxury-dark)] pb-10">
      <Navbar cartTotal={cartTotal} />

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
      <CartList
        items={items}
        quantities={quantities}
        onIncrement={increment}
        onDecrement={decrement}
        onChangeQuantity={setQuantity}
      />
    </div>
  );
}
