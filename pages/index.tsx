import Head from 'next/head';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card className="max-w-md animate-growAndShrink">
        <div className="grid gap-2">
          <span className="text-xs uppercase text-apple-gray-2">
            Come back later.
          </span>
          <h1 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-3xl font-bold">
            This Website is currently in the making.
          </h1>
        </div>
      </Card>
    </>
  );
}
