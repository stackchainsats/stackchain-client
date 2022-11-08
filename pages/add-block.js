import Link from "next/link";

const AddBlock = ({ blocks, blockBuilding }) => {
  if (!blockBuilding.parent) {
    return (
      <div>
        <h1>Select a parent block to build on</h1>
        <Link href="/blocks">Goto blocks page</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Add block Page</h1>
      <p>Building on block {blockBuilding.parentBuilder}</p>
      <p>New Block Height: {Number(blockBuilding.height) + 1}</p>
    </div>
  );
};

export default AddBlock;
