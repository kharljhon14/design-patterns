import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Design Patterns</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/image/favicon.png"
        />
      </Head>
      <div className="flex justify-center items-center max-h-screen h-screen">
        <h1 className="text-lg font-semibold">
          Welcome to the Design Pattern Sandbox
        </h1>
      </div>
    </>
  );
}
