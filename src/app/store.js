"use client";
import axios from "axios";
import { create } from "zustand";

const useCartStore = create((set) => ({
  products: [],
  isLoading: false,
  error: null,
  quantities: {},
  inCart: true,
  getProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios("https://fakestoreapi.com/products?limit=5");
      set({ products: data, isLoading: false });
      const init = {};
      data.forEach((item) => {
        init[item.id] = 1;
      });
      set({ quantities: init });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  increment: (id) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [id]: (state.quantities[id] || 0) + 1,
      },
    })),
  decrement: (id) =>
    set((state) => ({
      quantities: {
        ...state.quantities,
        [id]: (state.quantities[id] || 0) - 1,
      },
    })),
  onChangeQuantity: (id, value) =>
    set((state) => ({
      quantities: { ...state.quantities, [id]: value },
    })),
  setInCart: (id) =>
    set((state) => {
      if ((state.quantities[id] ?? 0) === 0 && state.inCart) {
        const confirmDelete = window.confirm("Hapus belanjaan dari keranjang?");
        if (confirmDelete) {
          return { inCart: false };
        } else {
        return {
          quantities: { ...state.quantities, [id]: 1 },
        };
      }
    } return state;
}),
}));

export default useCartStore;
