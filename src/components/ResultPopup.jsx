import React from "react";
import { useResultPegs } from "../store/resultPegs";

const ResultPopup = () => {
  const { resultPegs, setResultPegs } = useResultPegs();

  let header = "";
  let text = "";

  switch (resultPegs) {
    case 1:
      header = "Master of the Board";
      text = "You've achieved the ultimate victory with just 1 peg left!";
      break;
    case 2:
      header = "Peg Virtuoso";
      text = "Almost perfect! Just 2 pegs remain.";
      break;
    case 3:
      header = "Puzzle Prodigy";
      text =
        "Impressive! You're truly a Peg Solitaire expert with 3 pegs left.";
      break;
    case 4:
      header = "Clever Strategist";
      text = "Great work! 4 pegs left, your strategy was solid.";
      break;
    case 5:
      header = "Tactical Thinker";
      text =
        "Good job! 5 pegs remaining—just a few moves away from perfection.";
      break;
    case 6:
      header = "Not Too Shabby";
      text = "Decent game with 6 pegs left. Keep working on your strategy.";
      break;
    case 7:
      header = "The Middling Mind";
      text = "Not bad, but there's room for improvement. 7 pegs remain.";
      break;
    case 8:
      header = "Peg Novice";
      text =
        "You're getting the hang of it! 8 pegs are left. Practice makes perfect.";
      break;
    case 9:
      header = "Almost There";
      text = "You tried, but 9 pegs got the best of you this time.";
      break;
    default:
      header = "Peg Apprentice";
      text = `It’s a tough game with ${resultPegs} pegs remaining! Keep trying, and you'll get better.`;
      break;
  }

  return (
    resultPegs > 0 && (
      <div className="fixed flex items-center justify-center w-screen h-screen top-0 left-0 right-0 bottom-0 bg-[rgba(27,27,27,0.8)]">
        <div className="flex flex-col justify-center items-center bg-[#363636] text-white p-6 rounded-md w-96">
          <h1 className="text-2xl font-bold mb-2">{header}</h1>
          <p className="text-center mb-4">{text}</p>
          <button
            onClick={() => {
              setResultPegs(0);
            }}
            className="bg-dark w-full py-2 transition hover:opacity-90 rounded-md"
          >
            CLOSE
          </button>
        </div>
      </div>
    )
  );
};

export default ResultPopup;
