import Social from '@/components/sections/social-section/social';
import { fetchSocials } from '@/lib/socials';

export default async function SocialList() {
  const socials = await fetchSocials();

  if (socials === null || socials === undefined || socials.length === 0)
    return <div>No socials listed.</div>;

  return (
    <ul className="no-scrollbar overflow-hidden overflow-x-auto whitespace-nowrap pb-2">
      {socials.map((social) => (
        <li
          key={social.title}
          className="group mr-8 inline-block first-of-type:ml-4 sm:first-of-type:ml-16"
        >
          <Social social={social} />
        </li>
      ))}
    </ul>
  );
}