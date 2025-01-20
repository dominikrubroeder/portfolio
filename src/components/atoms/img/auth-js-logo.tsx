import Image from 'next/image';

export default function AuthJsLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/auth-js.png"
      width={128}
      height={128}
      alt="Auth.js logo"
      draggable={false}
      className={className}
    />
  );
}
