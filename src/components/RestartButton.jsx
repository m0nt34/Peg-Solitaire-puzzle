import React from "react";
import { restartFunction } from "../utils/restartGame";
import Restart from "../assets/icons/Restart";
const RestartButton = () => {
  return <button className="flex bg-dark px-6 py-3 transition hover:opacity-85 rounded-md items-center justify-center text-white gap-2 text-2xl" onClick={restartFunction}>
    <Restart />
    Restart
  </button>;
};

export default RestartButton;
