import { useState, useEffect } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";
import VirtualAndInfiniteScroll from "../../components/scroll/virtual-and-infinite-scroll";
import BlockListItem from "./BlockListItem";
import { BlocksTitle, BlockListWrapper } from "./styled";

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
      <BlocksTitle>Stackchain Blocks</BlocksTitle>
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

export default Blocks;
