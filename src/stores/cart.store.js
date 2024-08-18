import { successMessage } from "@/utils/toast";
import create from "zustand";
import { persist } from "zustand/middleware";

const TAX_RATE = 0.13; // 13% tax rate

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      // Add a product to the cart
      addToCart: (product) => {
        console.log("product.......", product);

        const existingProduct = get().cart.find((p) => p._id === product._id);
        if (existingProduct) {
          set({
            cart: get().cart.map((p) =>
              p._id === product._id
                ? {
                    ...p,
                    qty: product.qty ? product.qty + p.qty : p.qty + 1,
                  }
                : p
            ),
          });
        } else {
          set({ cart: [{ ...product, qty: product.qty || 1 }, ...get().cart] });
        }
        successMessage("Item updated to cart");
      },

      // Decrement product quantity
      decrementQty: (id) => {
        set({
          cart: get()
            .cart.map((p) => (p._id === id ? { ...p, qty: p.qty - 1 } : p))
            .filter((p) => p.qty > 0),
        });
        successMessage("Item quantity adjusted");
      },
      //Clear Cart
      clearCart: () => {
        set({ cart: [] });
        successMessage("Cart cleared successfully!");
      },

      //Calc total without tax
      total: () =>
        get().cart.reduce(
          (sum, product) => sum + product.price * product.qty,
          0
        ),
      //Calc tax based on total
      tax: () => get().total() * TAX_RATE,

      //Calc grand total (total+tax)
      grandTotal: () => get().total() + get().tax(),
    }),

    {
      name: "cart-storage", // Unique name for local storage key
      getStorage: () => localStorage, // Ensure that localStorage is being used
    }
  )
);
