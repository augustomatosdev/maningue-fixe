import { create } from "zustand";

//state to manage carta open and close
const useCartOpenStore = create((set) => ({
  cartOpen: false,
  openCart: () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),
}));

export { useCartOpenStore };
