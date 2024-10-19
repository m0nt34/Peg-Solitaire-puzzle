import { useBoard } from "../store/board";
import { useSelected } from "../store/selectedCell";
import { directions } from "../data/directions";
import { useAvMoves } from "../store/availableMoves";

export const setSelectedCell = (i, j) => {
  const { board } = useBoard.getState();
  const { setSelected } = useSelected.getState();
  const { setAvailableMoves } = useAvMoves.getState();
  setSelected([i, j]);

  const avMoves = [];
  directions.forEach((dir) => {
    const newRow = i + dir[0] * 2;
    const newCol = j + dir[1] * 2;
    
    if (
      newRow >= 0 &&
      newRow < board.length &&
      newCol >= 0 &&
      newCol < board[0].length
    ) {
      if (
        board[newRow][newCol] !== null &&
        board[newRow][newCol] !== undefined &&
        !board[newRow][newCol]
      ) {
        avMoves.push({
          move: [newRow, newCol],
          delete: [i + dir[0], j + dir[1]],
        });
      }
    }
  });

  setAvailableMoves(avMoves);
};
