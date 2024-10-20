import { useBoard } from "../store/board";

export const countPegs = () => {
  const { board } = useBoard.getState();
  let count = 0;
  board.forEach((row) => {
    row.forEach((cell) => {
      if (cell) count++;
    });
  });
  return count;
};
