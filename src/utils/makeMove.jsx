import { useAvMoves } from "../store/availableMoves";
import { useBoard } from "../store/board";
import { useSelected } from "../store/selectedCell";

export const makeMove = (i, j) => {
  const { selected, setSelected } = useSelected.getState();
  const { availableMoves } = useAvMoves.getState();
  const { board, setBoard } = useBoard.getState();

  if (selected !== null && availableMoves.length !== 0) {
    const move = availableMoves.find(
      (move) => move.move[0] === i && move.move[1] === j
    );
    if (move) {
      const newBoard = [...board];
      newBoard[selected[0]][selected[1]] = false;
      newBoard[move.move[0]][move.move[1]] = true;
      newBoard[move.delete[0]][move.delete[1]] = false;
      setBoard(newBoard);
      setSelected([move.move[0], move.move[1]]);
    }
  }
};
