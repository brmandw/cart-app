import { create } from "zustand"

const useCartStore = create((set) => ({
    items: [],
    quantities: {},
    setItems: (items) => set((state) => {
        const newQuantities = {...state.quantities};
        items.forEach((item) => {
            if (newQuantities[item.id] === undefined) newQuantities[item.id] = 1; 
        });
        return { items, quantities: newQuantities}
    }),
    increment: (id) => set((state) => ({
        quantities: {...state.quantities, [id]: (state.quantities[id] || 0) + 1} 
    })),
    decrement: (id) => set((state) => {
        const qty = (state.quantities[id] || 0) - 1;
        const newQuantities = {...state.quantities}
        if (qty <= 0) {
            delete newQuantities[id];
        }else {
            newQuantities[id] = qty
        }
        return { quantities: newQuantities }
    }),
    setQuantity: (id, value) => set((state) => ({
        quantities: {...state.quantities, [id]: value}
    })),
    cartTotal: () => (get) => Object.values(get().quantities).reduce((a, b) => a + b, 0 ),
}));

export default useCartStore;