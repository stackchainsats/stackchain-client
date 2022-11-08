import Button from "../components/Button";
import Link from "next/link";

const Blocks = ({ blocks, setBlockBuilding }) => {
  return (
    <div>
      <h1>Blocks Page</h1>
      {blocks
        .sort((a, b) => b.height - a.height)
        .map((block, index) => {
          console.log("block", block);
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid grey",
                borderRadius: "4px",
                marginBottom: "8px",
                padding: "16px",
              }}
              key={index}
            >
              <div>
                <div>{block.height}: </div>
                <div>{block.builder}</div>
              </div>
              <Link href={`/add-block`}>
                <Button
                  onClick={() =>
                    setBlockBuilding({
                      parent: block.parent,
                      parentBuilder: block.parentBuilder,
                      height: block.height + 1,
                    })
                  }
                >
                  Build on this Block
                </Button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Blocks;
