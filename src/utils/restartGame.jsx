import { useAvMoves } from "../store/availableMoves";
import { useBoard } from "../store/board";
import { useResultPegs } from "../store/resultPegs";
import { useSelected } from "../store/selectedCell";

export const restartFunction = () => {
  const { setBoardToDefault } = useBoard.getState();
  const { setAvailableMoves } = useAvMoves.getState();
  const { setSelected } = useSelected.getState();
  const { setResultPegs } = useResultPegs.getState();

  setBoardToDefault();
  setAvailableMoves(null);
  setSelected(null);
  setResultPegs(0);
};
