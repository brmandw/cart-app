'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import CartList from "./cartList";

export default function Home() {
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const cartTotal = Object.values(quantities).reduce((a, b) => a + b, 0);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const { data } = await axios("https://fakestoreapi.com/products?limit=5");
    setItems(data);
    const init = {};
    data.forEach((item) => {
      init[item.id] = 1;
    });
    setQuantities(init);
    console.log(data);
  };

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const handleChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <div className="bg-gray-100 pb-10 min-h-screen w-full overflow-x-hidden">
      <Navbar cartTotal={cartTotal} />

      <div
        className="mt-5 mx-8 xl:mx-28 xl:px-20 lg:mx-23 lg:px-8 hidden md:flex lg:flex xl:flex justify-between
                bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
          {/* Image*/}
          <div className="w-15 h-15 xl:w-20 xl:h-20 flex items-center justify-center">
            <div className="text-center ">Product</div>
          </div>

          {/* Price counter and total for larger screen */}
          <div className="hidden md:flex lg:flex xl:flex gap-8 justify-center items-center">
            <div className="w-24 text-sm text-center ">
              <div className="w-35 text-center pl-4">Price</div>
            </div>
            <div className="flex items-center ">
              <div className="w-40 text-center">Quantities</div>
            </div>
            <div className="w-24 text-sm font-bold text-center">
              <div className="w-35 text-left pl-4">Total</div>
            </div>
          </div>
      </div>
        <CartList
          items={items}
          quantities={quantities}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onChangeQuantity={handleChange} />
      </div>
      );
}
