import React from "react";
import { useBoard } from "../store/board";
import { useSelected } from "../store/selectedCell";
import { setSelectedCell } from "../utils/selectCell";
import { makeMove } from "../utils/makeMove";
const Board = () => {
  const { board } = useBoard();
  const { selected } = useSelected();

  return (
    <table>
      <tbody>
        {board.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                key={`${i}-${j}`}
                className={`w-20 h-20 ${cell === null ? "" : "bg-dark"}`}
              >
                {cell !== null && (
                  <div className="flex items-center justify-center bg-dark w-20 h-20 rounded-xl">
                    {cell ? (
                      selected !== null &&
                      selected[0] === i &&
                      selected[1] === j ? (
                        <span className="rounded-full border-4 border-[#7d41b1] bg-[#3d1f58] h-[60%] w-[60%]"></span>
                      ) : (
                        <span
                          onClick={() => setSelectedCell(i, j)}
                          className="rounded-full bg-dark_puple h-[60%] w-[60%]"
                        ></span>
                      )
                    ) : (
                      <span
                        onClick={() => {
                          makeMove(i, j);
                        }}
                        className="rounded-full bg-[#3d3d3d] h-[60%] w-[60%]"
                      ></span>
                    )}
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
