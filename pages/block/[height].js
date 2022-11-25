import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TwitterTweetEmbed } from "react-twitter-embed";
import styled from "styled-components";

const BlockWrapper = styled.div`
  width: 550px;
  margin: 0 auto;
  padding: 40px 0;

  .bold {
    font-weight: 700;
  }
  a {
    transition: 0.3s all;
  }
  a:hover {
    color: orange;
  }

  .back-link {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }

  .block-details {
    margin-bottom: 24px;
  }
  .block-detail {
    margin-bottom: 12px;
  }
`;

const Block = ({ blocks }) => {
  const router = useRouter();
  const { height } = router.query;
  const [blocksAtHeight, setBlocksAtHeight] = useState([]);

  useEffect(() => {
    if (blocks.length > 0) {
      const blocksToDisplay = blocks.filter((block) => {
        return block.height === Number(height);
      });
      setBlocksAtHeight(blocksToDisplay);
    }
  }, [blocks]);

  return (
    <BlockWrapper>
      <Link href="/blocks" className="back-link">
        {" "}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
        </svg>
        Back to Blocks
      </Link>
      {blocksAtHeight.map((block, index) => {
        const tweetId = block.twitterURL?.split("/")[5];

        return (
          <div key={index}>
            <div className="block-details">
              <h1>Block {block.height}</h1>

              <div className="block-detail">
                <span className="bold">Builder:</span>{" "}
                <a
                  href={`https://twitter.com/${block.builder}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {block.builder}
                </a>
              </div>
              <div className="block-detail">
                <span className="bold">URL:</span>{" "}
                <a href={block.twitterURL} target="_blank" rel="noreferrer">
                  {block.twitterURL}
                </a>
              </div>
            </div>
            {tweetId && (
              <TwitterTweetEmbed
                tweetId={tweetId}
                options={{ conversation: "none" }}
              />
            )}
          </div>
        );
      })}
    </BlockWrapper>
  );
};
export default Block;
