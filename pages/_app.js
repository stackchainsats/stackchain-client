import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "../components/layout";
import BlocksJSON from "../blocks.json";

const noLayoutRoutes = ["/login"];

const MyApp = ({ Component, pageProps }) => {
  const [blocks, setBlocks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setBlocks(BlocksJSON);
  }, []);

  // Read
  const getBlocks = async () => {
    const res = await axios.get("/api/blocks");
    const data = res.data;
    setBlocks(data);
  };

  return noLayoutRoutes.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
      <Component {...pageProps} blocks={blocks} getBlocks={getBlocks} />
    </Layout>
  );
};

export default MyApp;
