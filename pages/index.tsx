import Head from 'next/head';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Dominik Rubröder | Team frontend development and interface design
        </title>
        <meta
          name="description"
          content="Dominik Rubröder | Team frontend development and interface design | Love for animations and transitions"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <Card className="m-4 max-w-md animate-growAndShrink">
        <div className="grid gap-2">
          <span className="text-xs uppercase">Come back later.</span>
          <h1 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-3xl font-bold">
            This Website is currently in the making.
          </h1>
        </div>
      </Card>
    </>
  );
}
