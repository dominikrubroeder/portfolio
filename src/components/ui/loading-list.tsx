export default function LoadingList() {
  return (
    <section className="animate-pulse px-8">
      <div className="grid gap-8">
        <div className="h-8 w-full max-w-64 rounded-full bg-muted"></div>
        <div className="h-[calc(100dvh-12rem)] rounded-3xl bg-muted"></div>
      </div>
    </section>
  );
}
