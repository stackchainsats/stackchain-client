import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stackchain Dashboard</title>
        <meta name="description" content="Stackchain Dashboard App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Dashboard Page</h1>
      <Link href="/components" style={{ color: "#00ab55" }}>
        Components here
      </Link>
    </div>
  );
}
