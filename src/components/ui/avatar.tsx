import Image from 'next/image';
import Link from 'next/link';

export default function Avatar({
  width,
  height,
  as
}: {
  width: number;
  height: number;
  as?: 'Image' | 'Link';
}) {
  if (as === 'Image')
    return (
      <Image
        src="/avatar.jpg"
        alt="Dominik Rubröder Avatar"
        width={width}
        height={height}
        className="shrink-0 rounded-full border-2 border-gray-5"
        draggable={false}
      />
    );

  return (
    <Link href="/" className="button flex items-center">
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
