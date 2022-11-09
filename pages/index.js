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
      <p>The StackChain Dashboard is an application helping Stackchainers to organize, access, and use stackchain data.</p>
      <Link href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fsearch%3Fq%3D%28%2523stackchaintip%29%2520%28from%253Astackchainsig%29%26src%3Dtyped_query%26f%3Dlive&sa=D&sntz=1&usg=AOvVaw2mTjfZFigCfs-y-8zsBZey" style={{ color: "#0000EE" }}>
        Find The Tip!
      </Link>
      <br></br>
      <br></br>
      <Link href="/components" style={{ color: "#0000EE" }}>
        Components
      </Link>

    </div>
  );
}
