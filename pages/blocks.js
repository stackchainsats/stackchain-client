const Blocks = ({ blocks }) => {
  return (
    <div>
      <h1>Blocks Page</h1>
      {blocks
        .sort((a, b) => b.height - a.height)
        .map((block, index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              <div>{block.height}: </div>
              <div>{block.builder}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Blocks;
