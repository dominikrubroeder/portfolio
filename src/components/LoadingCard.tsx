export default function LoadingCard() {
  return (
    <section className="px-8 animate-pulse">
      <div className="grid gap-6 w-80 animate-pulse">
        <div className="w-full h-80 bg-gray-5 rounded-3xl"></div>
        <div className="grid gap-4">
          <div className="rounded-full bg-gray-5 h-8 max-w-64 w-full mx-auto"></div>
          <div className="rounded-full bg-gray-5 h-8 max-w-32 w-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
