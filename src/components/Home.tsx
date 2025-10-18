import { useState } from "react";
import words from "../../word.json";
import HangmanDrawing from "../pages/HangmanDrawing";
import HangmanWord from "../pages/HangmanWord";
import KeyBoard from "../pages/KeyBoard";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const Home = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [gussedLetters, setGussedLetters] = useState<string[]>([]);
  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems:"center"
      }}
      className=""
    >
      {/* ============= result text ======= */}
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      {/* ============ HangmanDrawing ============ */}
      <HangmanDrawing />

      {/* ================= HangmanWord ============== */}
      <HangmanWord />

      {/* ================== KeyBoard ============= */}
      <KeyBoard />
    </div>
  );
};

export default Home;
