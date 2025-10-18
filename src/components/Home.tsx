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
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems:"center",
         padding:"0 10px",
         
       
      }}
      
    >
      {/* ============= result text ======= */}
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      {/* ============ HangmanDrawing ============ */}
      <HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>

      {/* ================= HangmanWord ============== */}
      <HangmanWord />

      {/* ================== KeyBoard ============= */}
     <div style={{alignSelf:"stretch"}}>
         <KeyBoard />
     </div>
    </div>
  );
};

export default Home;
