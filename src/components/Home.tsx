import { useCallback, useEffect, useState } from "react";
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
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLooser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  console.log(wordToGuess);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLooser || isWinner) return;
      setGuessedLetters((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetters,isLooser,isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      {/* ============= result text ======= */}
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner!"} {isLooser && "Lose! - Nice Try!"}
      </div>
      {/* ============ HangmanDrawing ============ */}
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      {/* ================= HangmanWord ============== */}
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />

      {/* ================== KeyBoard ============= */}
      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard
          disabled={isWinner || isLooser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default Home;
