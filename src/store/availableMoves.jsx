import { create } from "zustand";

export const useAvMoves = create((set) => ({
  availableMoves: null,
  setAvailableMoves: (newAM) => set({ availableMoves: newAM }),
}));
