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
      <Link href="/components" style={{ color: "#0000EE" }}>
        Components
      </Link>
    </div>
  );
}
