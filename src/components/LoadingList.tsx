export default function LoadingList() {
  return (
    <section className="px-8 animate-pulse">
      <div className="grid gap-8">
        <div className="rounded-full bg-gray-5 h-8 max-w-64 w-full"></div>
        <div className="h-[calc(100dvh-12rem)] bg-gray-5 rounded-3xl"></div>
      </div>
    </section>
  );
}
