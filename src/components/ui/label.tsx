export default function Label({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`mx-2 shrink-0 self-start rounded-sm bg-gray-5 p-1 px-1.5 text-sm text-foreground ${
        className ? className : null
      }`}
    >
      {text}
    </span>
  );
}
