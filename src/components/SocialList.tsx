import { getSocials } from '@/lib';
import Social from '@/components/Social';

export default async function SocialList() {
  const socials = await getSocials();

  if (socials === null || socials === undefined || socials.length === 0)
    return <div>No socials listed.</div>;

  return (
    <ul className="no-scrollbar overflow-hidden overflow-x-auto whitespace-nowrap pb-2">
      {socials.map((social) => (
        <li
          key={social.title}
          className="group inline-block mr-8 first-of-type:ml-16"
        >
          <Social social={social} />
        </li>
      ))}
    </ul>
  );
}
