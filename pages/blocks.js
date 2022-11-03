const Blocks = ({ blocks }) => {
  return (
    <div>
      <h1>Blocks Page</h1>
      {blocks
        .sort((a, b) => b.height - a.height)
        .map((block) => {
          return (
            <div style={{ display: "flex" }}>
              <div>{block.height}: </div>
              <div>{block.builder}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Blocks;
