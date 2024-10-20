import Board from "./components/Board";
import RestartButton from "./components/RestartButton";
import ResultPopup from "./components/ResultPopup";

function App() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen w-full">
      <Board />
      <RestartButton />
      <ResultPopup />
    </div>
  );
}

export default App;
