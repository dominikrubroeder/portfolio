export default function AnimationPage() {
  return (
    <div className="flex h-screen items-center justify-center gap-4 overflow-hidden">
      <div className="h-8 w-2 animate-pulse bg-white duration-100"></div>
      <div className="flex gap-1">
        <div className="animate-fadeUp delay-700">0</div>
        <div className="animate-fadeUp delay-[3s]">1</div>
      </div>
    </div>
  );
}
