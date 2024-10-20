import { useBoard } from "../store/board";
import { directions } from "../data/directions";
export const hasAvailableMoves = () => {
  const { board } = useBoard.getState();
  const rows = board.length;
  const cols = board[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === true) {
        for (const [dx, dy] of directions) {
          const middleRow = row + dx;
          const middleCol = col + dy;
          const targetRow = row + dx * 2;
          const targetCol = col + dy * 2;
          if (
            targetRow >= 0 &&
            targetRow < rows &&
            targetCol >= 0 &&
            targetCol < cols &&
            board[middleRow]?.[middleCol] === true &&
            board[targetRow]?.[targetCol] === false
          ) {
            return true;
          }
        }
      }
    }
  }

  return false;
};
