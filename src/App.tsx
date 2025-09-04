import React from "react";
import StartScreen from "./StartScreen";
import bg from "./assets/the-crystal-cove.png";

export default function App() {
  return <StartScreen bg={bg} onStart={() => console.log("Game started")} />;
}
