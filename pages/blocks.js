import { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";

const BlockWrapper = styled.div`
  color: rgb(33, 43, 54);
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;

  & .block-stat {
    margin-bottom: 10px;

    & span {
      font-weight: 700;
    }
  }
`;

const Blocks = ({ blocks, setBlockBuilding }) => {
  const [editing, setEditing] = useState(null);
  const [blockData, setBlockData] = useState({
    height: "",
    parent: "",
    twitterURL: "",
  });
  const [proofs, setProofs] = useState([
    { amount: "", twitterURL: "", miner: "" },
  ]);

  // Create
  const onSubmitBlock = async (e) => {
    e.preventDefault();
    const builder = blockData?.twitterURL?.split("/")[3] || "";

    await axios.post("/api/blocks", {
      height: blockData.height,
      builder: builder,
      twitterURL: blockData.twitterURL,
      proofs2,
    });

    // height.value = "";
    // builder.value = "";
    // twitterURL.value = "";
    // getBlocks();
  };

  // Update
  const onSubmitEdits = async (e, id) => {
    e.preventDefault();

    try {
      await axios.post(
        `https://stackchain-backend.herokuapp.com/api/blocks/update/${id}`,
        {
          height: e.target.height.value,
          builder: e.target.builder.value,
          twitterURL: e.target.twitterURL.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
    setEditing(null);
    // getBlocks();
  };

  return (
    <div>
      <h1>Blocks Page</h1>

      <div className="DataOutput">
        {blocks
          .sort((a, b) => b.height - a.height)
          .map((block, index) => (
            <div key={index}>
              {editing !== block._id ? (
                <BlockDisplay block={block} setEditing={setEditing} />
              ) : (
                <BlockEdit
                  block={block}
                  onSubmitEdits={onSubmitEdits}
                  setEditing={setEditing}
                  setBlockData={setBlockData}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

const BlockDisplay = ({ block, setEditing }) => {
  return (
    <BlockWrapper key={block._id}>
      <div>
        <div>
          <div className="block-stat">
            <span>Height: </span>
            {block.height}
          </div>
          <div className="block-stat">
            <span>Builder: </span>
            {block.builder}
          </div>
          <div className="block-stat">
            <span>Twitter URL: </span>
            {block.twitterURL}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Button onClick={() => setEditing(block._id)}>Edit</Button>
        </div>
      </div>

      <div>
        <Link href={"/add-block"}>
          <Button variation="primary">Build on this block</Button>
        </Link>
      </div>
    </BlockWrapper>
  );
};

const BlockEdit = ({ block, onSubmitEdits, setEditing, setBlockData }) => {
  const [height, setHeight] = useState(block.height);
  const [builder, setBuilder] = useState(block.builder);
  const [twitterURL, setTwitterURL] = useState(block.twitterURL);

  return (
    <BlockWrapper key={block._id} className="DataOutput__editing">
      <form onSubmit={(e) => onSubmitEdits(e, block._id)}>
        <div className="DataOutput__editing--option">
          <TextInput
            type="text"
            name="height"
            label="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="DataOutput__editing--option">
          <TextInput
            type="text"
            name="builder"
            label="Builder"
            value={builder}
            onChange={(e) => setBuilder(e.target.value)}
          />
        </div>
        <div className="DataOutput__editing--option">
          <TextInput
            type="text"
            name="twitterURL"
            label="Twitter URL"
            value={twitterURL}
            onChange={(e) => setTwitterURL(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <Button type="Submit">Submit</Button>
          <Button
            className="DataOutput__editing--cancel"
            onClick={() => setEditing(null)}
          >
            Cancel
          </Button>
        </div>
      </form>
      <div></div>
    </BlockWrapper>
  );
};

export default Blocks;
