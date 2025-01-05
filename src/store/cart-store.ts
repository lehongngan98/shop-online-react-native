import { create } from "zustand";
import { PRODUCTS } from "../../assets/mockApis/products";

type CartItemType = {
  id: number;
  title: string;
  image: any;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (id: number) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  getTotalPrice: () => string;
  getItemCount: () => number;
};

const initialCartItems: CartItemType[] = [];

export const useCartStore = create<CartState>((set, get) => ({
  items: initialCartItems,

  addItem: (item: CartItemType) => {
    const existingItem = get().items.find((i) => i.id === item.id);
    // If the item already exists in the cart, update the quantity
    if (existingItem) {
      set((state) => ({
        items: state.items.map((i) =>
          // If the item is the one we want to update, update the quantity
          i.id === item.id
            ? {
                ...i,
                // Ensure the quantity doesn't exceed the max quantity
                quantity: Math.min(
                  i.quantity + item.quantity,
                  PRODUCTS.find((p) => p.id === item.id)?.maxQuantity ||
                    i.quantity
                ),
              }
            : i
        ),
      }));
    } else {
      // If the item doesn't exist in the cart, add it
      set((state) => ({ items: [...state.items, item] }));
    }
  },

  removeItem: (id: number) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),

  incrementItem: (id: number) =>
    set((state) => {
      const product = PRODUCTS.find((p) => p.id === id);
      // If the product doesn't exist, return the current state
      if (!product) return state;
      // If the product quantity is less than the max quantity, increment the quantity
      return {
        items: state.items.map((item) =>
          item.id === id && item.quantity < product.maxQuantity
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };
    }),

  decrementItem: (id: number) =>
    set((state) => ({
      // If the item quantity is greater than 1, decrement the quantity
      items: state.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

  getTotalPrice: () => {
    const { items } = get();

    // Calculate the total price of all items in the cart
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  },

  getItemCount: () => {
    const { items } = get();

    // Calculate the total number of items in the cart
    return items.reduce((count, item) => count + item.quantity, 0);
  },
}));
