import Image from 'next/image';
import Link from 'next/link';

export default function Avatar({
  width,
  height
}: {
  width: number;
  height: number;
}) {
  return (
    <Link href="/public" className="button flex items-center">
      <Image
        src="/avatar.jpg"
        alt="Dominik Rubröder Avatar"
        width={width}
        height={height}
        className="shrink-0 rounded-full border-2 border-gray-5"
        draggable={false}
      />
    </Link>
  );
}
