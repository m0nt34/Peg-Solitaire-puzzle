import { create } from "zustand";

export const useResultPegs = create((set) => ({
  resultPegs: 0,
  setResultPegs: (newRP) => set({ resultPegs: newRP }),
}));
