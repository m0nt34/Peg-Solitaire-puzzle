import { create } from "zustand";

export const useSelected = create((set) => ({
  selected: null,
  setSelected: (newS) => set({ selected: newS }),
}));
