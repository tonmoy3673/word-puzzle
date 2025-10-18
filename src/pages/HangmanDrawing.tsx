const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "10px",
          width: "200px",
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
