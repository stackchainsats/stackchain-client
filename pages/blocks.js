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
        (_, index) => index >= startingIndex && index < startingIndex + 100
      )
      .map((block, index) => (
        <BlockListItem
          key={index}
          block={block}
          editing={editing}
          setEditing={setEditing}
          onSubmitEdits={onSubmitEdits}
          setBlockBuilding={setBlockBuilding}
          setBlockData={setBlockData}
        />
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
      <BlockTitle>Stackchain Blocks</BlockTitle>
      <BlockListWrapper>
        <VirtualAndInfiniteScroll
          listItems={items}
          height={78}
          lastRowHandler={() => {
            setTimeout(() => {
              const newBlocks = renderTenBlocks(items.length);
              setItems(items.concat(newBlocks));
            }, 1000);
          }}
        />
      </BlockListWrapper>
    </div>
  );
};

const BlockTitle = styled.h1`
  width: 1200px;
  margin: 40px auto 30px auto;
  padding-left: 16px;
`;

const BlockListWrapper = styled.div`
  box-shadow: rgb(100 116 139 / 6%) 0px 1px 1px,
    rgb(100 116 139 / 10%) 0px 1px 2px;
  background-image: none;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid rgb(240, 240, 240);

  &:first-child {
    color: red;
  }

  h1 {
    width: 1200px;
    margin: 40px auto 20px auto;
    padding-left: 16px;
  }

  color: #212b36;

  .block-column {
    padding: 16px 32px;
  }

  .block-height {
    width: 120px;
    min-width: 120px;
  }
  .block-avatar {
    background-color: black;
    color: white;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .block-builder {
    font-weight: 600;
  }

  a {
    transition: 0.3s all;
  }
  a:hover {
    color: orange;
  }
  @media (max-width: 800px) {
    .block-url {
      display: none;
    }
  }

  .block-builder,
  .block-stackers {
    width: 50%;
  }

  .block-actions {
    display: flex;
    justify-content: flex-end;
  }
  .block-action {
    padding: 8px;
    margin: 0 4px;
    cursor: pointer;
    transition: 0.3s all;
  }
  .block-action svg {
    font-size: 20px;
    color: #637381;
  }
  .block-action:hover {
    background: rgb(240, 240, 240);
    border-radius: 4px;
    svg {
      color: #262626;
    }
  }
`;

const BlockListItemWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 77px;
  border-bottom: 1px solid rgb(240, 240, 240);

  &:hover {
    background: rgb(250, 250, 250);
  }
`;

const BlockListItem = ({
  block,
  editing,
  setEditing,
  onSubmitEdits,
  setBlockBuilding,
  setBlockData,
}) => {
  const [height, setHeight] = useState(block.height);
  const [builder, setBuilder] = useState(block.builder);
  const [twitterURL, setTwitterURL] = useState(block.twitterURL);

  return (
    <BlockListItemWrapper className="block-list-item">
      <div className="block-height block-column">
        <Link href={`block/${block.height}`}>{block.height}</Link>
      </div>
      <div className="block-avatar block-column">
        {block.builder?.split("")[0]}
      </div>

      <div className="block-builder block-column">
        <a
          href={`https://www.twitter.com/${block.builder}`}
          target="_blank"
          rel="noreferrer"
        >
          {block.builder}
        </a>
      </div>
      {/* <div className="block-stackers block-column"># of stackers</div> */}
      <div className="block-url block-column">
        <a href={block.twitterURL} target="_blank" rel="noreferrer">
          {block.twitterURL}
        </a>
      </div>

      <div className="block-actions block-column">
        <div className="block-action" onClick={() => console.log("edit block")}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M761.1 288.3L687.8 215 325.1 577.6l-15.6 89 88.9-15.7z"></path>
            <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z"></path>
          </svg>
        </div>
        <Link href={"/add-block"}>
          <div
            className="block-action"
            onClick={() => setBlockBuilding({ height: block.height + 1 })}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M474.1 398.2L289.1 212c18.3-47 8.1-102.3-30.5-141.1C217.9 30 156.9 21.8 108.1 44.3l87.4 88-61 61.4-89.5-88c-24.3 49-14.1 110.4 26.5 151.3 38.6 38.9 93.5 49.1 140.3 30.7l185 186.2c8.1 8.2 20.3 8.2 28.5 0l46.8-47c10.2-8.3 10.2-22.6 2-28.7z"></path>
            </svg>
          </div>
        </Link>
        <a href={block.twitterURL} target="_blank" rel="noreferrer">
          <div className="block-action">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
            </svg>
          </div>
        </a>
      </div>
    </BlockListItemWrapper>
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
