import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "../components/layout";
import BlocksJSON from "../sample-blocks.json";
import MempoolJSON from "../mempool.json";

const noLayoutRoutes = ["/login"];

const blockRoutes = ["/blocks", "/add-block"];

const MyApp = ({ Component, pageProps }) => {
  const [blocks, setBlocks] = useState([]);
  const [blockBuilding, setBlockBuilding] = useState({});
  const [mempool, setMempool] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getBlocks();
    getMempool();

    // getMempool();
  }, []);

  // Read
  const getBlocks = async () => {
    setBlocks(BlocksJSON);
    console.log("getBlocks");
    // const res = await axios.get("/api/blocks");
    // const data = res.data;
    // setBlocks(data);
  };

  const getBlock = () => {
    // Get single block
    console.log("getBlock");
  };

  const addBlock = () => {
    // Add block
    console.log("addBlock");
  };

  const editBlock = () => {
    // Edit block
    console.log("editBlock");
  };

  const deleteBlock = () => {
    // Delete Block
    console.log("deleteBlock");
  };

  const getMempool = async () => {
    setMempool(MempoolJSON);
    // const res = await axios.get("/api/transactions");
    // const data = res.data;
    // setMempool(data);
  };

  if (blockRoutes.includes(router.pathname)) {
    return (
      <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
        <Component
          {...pageProps}
          blocks={blocks}
          getBlocks={getBlocks}
          getBlock={getBlock}
          editBlock={editBlock}
          deleteBlock={deleteBlock}
          blockBuilding={blockBuilding}
          setBlockBuilding={setBlockBuilding}
        />
      </Layout>
    );
  }

  return noLayoutRoutes.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
      <Component {...pageProps} blocks={blocks} getBlocks={getBlocks} />
    </Layout>
  );
};

export default MyApp;
