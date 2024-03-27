export default function HomeHeroSectionLoading() {
  return (
    <section className="relative flex h-[calc(100dvh-5rem)] animate-pulse items-center justify-center">
      <div className="h-16 w-96 shrink-0 rounded-full bg-gray-4 sm:w-[36rem]"></div>

      <div className="fixed bottom-24 h-8 w-32 shrink-0 rounded-full bg-gray-4"></div>
      <div className="fixed bottom-4 h-14 w-80 shrink-0 rounded-full bg-gray-4 sm:w-96"></div>
    </section>
  );
}
