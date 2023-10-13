import Link from 'next/link';
import Avatar from './ui/Avatar';

export default function Logo() {
  return (
    <Link href="/">
      <Avatar size={32} />
    </Link>
  );
}
