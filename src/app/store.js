"use client";
import axios from "axios";
import { create } from "zustand";

const useCartStore = create((set, get) => ({
  products: [],
  isLoading: false,
  error: null,
  getProducts: async () => {
    set({ isLoading: true, error: null }); 
    try {
      const { data } = await axios("https://fakestoreapi.com/products?limit=10");
      set({ products: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  cartCount: 0,
  setCC: () => set((state) => ({
    cartCount: state.products.length
  })),
  addToCart: (val) =>
    set((state) => ({
      cartCount: state.cartCount + val ,
    })),

  rmvFromCart: (val) =>
    set((state) => ({
      cartCount: state.cartCount - val,
    })),

}));

export default useCartStore;
