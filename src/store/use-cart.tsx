// use-cart.tsx
import { create } from "zustand";
import localforage from "localforage";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number | null;
  variant?: string | null;
  quantity: number;
  thumbnail?: string;
  createdAt: string;
};

type CartState = {
  cartOpen: boolean;
  items: CartItem[];
  loading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: CartItem) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  clearCart: () => Promise<void>;
  loadCart: () => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
};

// key used in localforage
const CART_KEY = "qlinq_cart";

export const useCartStore = create<CartState>((set, get) => ({
  cartOpen: false,
  items: [],
  loading: true,

  openCart: () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),

  // Load from localforage
  loadCart: async () => {
    set({ loading: true });
    const data = (await localforage.getItem<CartItem[]>(CART_KEY)) || [];
    set({ items: data, loading: false });
  },

  addItem: async (item) => {
    const current = get().items;
    const existing = current.find((i) => i.id === item.id);

    let updated: CartItem[];
    if (existing) {
      updated = current.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
      );
    } else {
      updated = [item, ...current];
    }

    await localforage.setItem(CART_KEY, updated);
    set({ items: updated });
  },

  removeItem: async (id) => {
    const updated = get().items.filter((i) => i.id !== id);
    await localforage.setItem(CART_KEY, updated);
    set({ items: updated });
  },

  updateQuantity: async (id, quantity) => {
    const updated = get().items.map((i) =>
      i.id === id ? { ...i, quantity } : i
    );
    await localforage.setItem(CART_KEY, updated);
    set({ items: updated });
  },

  clearCart: async () => {
    await localforage.removeItem(CART_KEY);
    set({ items: [] });
  },
}));
