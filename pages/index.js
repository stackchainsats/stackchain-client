import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stackchain Dashboard</title>
        <meta name="description" content="Stackchain Dashboard App" />
        <meta property="og:title" content="Stackchain Dashboard App" />
        <meta
          property="og:description"
          content="Follow the Stackchain progress on the live dashboard, construct transactions to post on twitter."
        />
        <meta property="og:url" content="https://www.stackchain.app/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Dashboard Page</h1>
      <h3> Welcome to the StackChain Dashboard</h3>
      <p>
        The StackChain Dashboard is an application helping Stackchainers to
        organize, access, and use stackchain data. This website catalogs and
        preserves the chain outside of twitter and can be used for a variety of
        tools important to Stackchain.
      </p>
      <h4>Blocks</h4>
      <p>
        Use this section to view the latest stack height and all the blocks that
        have been created on Stackchain.
      </p>
      <h4>Stackjoin</h4>
      <p>
        {" "}
        This section lets you view the buys that have been proposed to Stackjoin
        and build a new block to the main chain. You can check off you can use
        the check boxes to elect buys and build a block. Theres also a section
        to prepare your tweet and get it ready for posting.
      </p>
      <h4>Memepool</h4>
      <p>
        {" "}
        We dont just stack stats we stack memes as well. This section is a
        library of just a few of the epic memes that have been created on chain.
      </p>
      <h4>Statistics</h4>
      <p>
        {" "}
        This section displays and catalogs key statistical information regarding
        data created in Stackchain.
      </p>
      <Link
        href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fsearch%3Fq%3D%28%2523stackchaintip%29%2520%28from%253Astackchainsig%29%26src%3Dtyped_query%26f%3Dlive&sa=D&sntz=1&usg=AOvVaw2mTjfZFigCfs-y-8zsBZey"
        style={{ color: "#0000EE" }}
      >
        Click Here to Find The Tip!
      </Link>
      <br></br>
      <br></br>
      <a href="https://twitter.com/StackchainSig" className="image bottom">
        <img src="/image2.jpg" alt="" />
      </a>
      <Link href="/components" style={{ color: "#0000EE" }}>
        Components
      </Link>
    </div>
  );
}
