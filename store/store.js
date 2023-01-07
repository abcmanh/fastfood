import create from "zustand";
export const useStore = create((set) => ({
  //cart
  cart: {
    pizzas: [],
  },

  //add items in cart
  addItems: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data],
      },
    })),

  //remove
  removePizza: (index) =>
    set((state) => ({
      cart: {
        pizzas: state.cart.pizzas.filter((_, i) => i != index),
      },
    })),

  resetCart: () =>
    set(() => ({
      cart: {
        pizzas: [],
      },
    })),
}));
