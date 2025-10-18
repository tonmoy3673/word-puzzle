// ========== Head ============//
const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "8px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

// ============== Body ===============//
const Body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      right: "0px",
      top: "108px",
    }}
  />
);

// =============== RightARM ===========/
const RightARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "-95px",
      top: "150px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

// =============== LeftARM ===========/
const LeftARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "10px",
      top: "148px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

// =============== RightLeg ===========/
const RightLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "-90px",
      top: "190px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

// =============== LeftLeg ===========/
const LeftLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      right: "0",
      top: "190px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const HangmanParts = [Head, Body, RightARM, LeftARM, RightLeg, LeftLeg];
interface HangmanDrawingType {
  numberOfGuesses: number;
}
const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingType) => {
  return (
    <div style={{ position: "relative" }}>
      {HangmanParts.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "160px",
          background: "black",
          marginLeft: "120px",
          borderBottomRightRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>

      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
          borderRadius: "6px",
        }}
      ></div>
    </div>
  );
};

export default HangmanDrawing;
