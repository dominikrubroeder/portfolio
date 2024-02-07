import Image from 'next/image';

export default function Inkdrop() {
  return (
    <Image
      src="/inkdrop.png"
      width={128}
      height={128}
      alt="Inkdrop logo"
      draggable={false}
    />
  );
}
