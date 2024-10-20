import { useAvMoves } from "../store/availableMoves";
import { useBoard } from "../store/board";
import { useResultPegs } from "../store/resultPegs";
import { useSelected } from "../store/selectedCell";
import { countPegs } from "./CountPegs";
import { hasAvailableMoves } from "./hasAvailableMoves";
import { setSelectedCell } from "./selectCell";
export const makeMove = (i, j) => {
  const { selected } = useSelected.getState();
  const { availableMoves } = useAvMoves.getState();
  const { board, setBoard } = useBoard.getState();
  const { setResultPegs } = useResultPegs.getState();

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

      setSelectedCell(move.move[0], move.move[1]);
      if (!hasAvailableMoves()) {
        setResultPegs(countPegs());
      }
    }
  }
};
