import Card from '@/components/Card';

export default function Page() {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="m-4 max-w-md animate-growAndShrink">
        <div className="grid gap-2">
          <span className="text-xs uppercase">Come back later.</span>
          <h1 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-3xl font-bold">
            This Website is currently in the making.
          </h1>
        </div>
      </Card>
    </div>
  );
}