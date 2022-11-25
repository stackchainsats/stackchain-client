import { useState, useEffect } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";
import VirtualAndInfiniteScroll from "../components/scroll/virtual-and-infinite-scroll";

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

const Blocks = ({ blocks, blockBuilding, setBlockBuilding }) => {
  const [editing, setEditing] = useState(null);
  const [blockData, setBlockData] = useState({
    height: "",
    parent: "",
    twitterURL: "",
  });
  const [proofs, setProofs] = useState([
    { amount: "", twitterURL: "", miner: "" },
  ]);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const firstTenBlocks = renderTenBlocks(0);
    setItems(firstTenBlocks);
  }, [blocks]);

  const renderTenBlocks = (startingIndex) => {
    const newItems = blocks
      .filter(
        (_, index) => index >= startingIndex && index < startingIndex + 50
      )
      .map((block, index) => (
        <div key={index}>
          {editing !== block._id ? (
            <BlockDisplay
              block={block}
              setEditing={setEditing}
              blockBuilding={blockBuilding}
              setBlockBuilding={setBlockBuilding}
              onSubmitBlock={onSubmitBlock}
            />
          ) : (
            <BlockEdit
              block={block}
              onSubmitEdits={onSubmitEdits}
              setEditing={setEditing}
              setBlockData={setBlockData}
            />
          )}
        </div>
      ));
    return newItems;
  };

  // Create
  const onSubmitBlock = async (e) => {
    e.preventDefault();
    const builder = blockData?.twitterURL?.split("/")[3] || "";

    await axios.post("/api/blocks", {
      height: blockData.height,
      builder: builder,
      twitterURL: blockData.twitterURL,
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
      <VirtualAndInfiniteScroll
        listItems={items}
        height={150}
        lastRowHandler={() => {
          setTimeout(() => {
            const newBlocks = renderTenBlocks(items.length);
            setItems(items.concat(newBlocks));
          }, 1000);
        }}
      />
    </div>
  );
};

const BlockDisplay = ({
  block,
  setEditing,
  blockBuilding,
  setBlockBuilding,
}) => {
  const splitURL = block?.twitterURL?.split("/");
  const tweetId = splitURL?.[5];

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
          {/* {tweetId && (
            <TwitterTweetEmbed
              tweetId={tweetId}
              options={{ conversation: "none" }}
            />
          )} */}
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "12px" }}>
          <Button onClick={() => setEditing(block._id)}>Edit</Button>
        </div>
        <Link href={"/add-block"}>
          <Button
            variation="primary"
            onClick={() => setBlockBuilding({ height: block.height })}
          >
            Build on this block
          </Button>
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
