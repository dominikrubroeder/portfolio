import Image from 'next/image';

export default function Instagram({ className }: { className?: string }) {
  return (
    <Image
      src="/instagram.png"
      width={128}
      height={128}
      alt="Instagram logo"
      draggable={false}
      className={className}
    />
  );
}
