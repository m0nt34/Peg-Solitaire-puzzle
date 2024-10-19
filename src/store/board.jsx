import { create } from "zustand";

export const useBoard = create((set) => ({
  board: [
    [null, null, true, true, true, null, null],
    [null, null, true, true, true, null, null],
    [true, true, true, true, true, true, true],
    [true, true, true, false, true, true, true],
    [true, true, true, true, true, true, true],
    [null, null, true, true, true, null, null],
    [null, null, true, true, true, null, null],
  ],
  setBoard: (newBoard) =>
    set({
      board: newBoard,
    }),
  setBoardToDefault: () =>
    set({
      board: [
        [null, null, true, true, true, null, null],
        [null, null, true, true, true, null, null],
        [true, true, true, true, true, true, true],
        [true, true, true, false, true, true, true],
        [true, true, true, true, true, true, true],
        [null, null, true, true, true, null, null],
        [null, null, true, true, true, null, null],
      ],
    }),
}));
