import Social from '@/components/organisms/social-section/social';
import { socials } from '@/components/organisms/social-section/data';

export default function SocialList() {
  return (
    <ul className="no-scrollbar overflow-hidden overflow-x-auto pb-2 whitespace-nowrap">
      {socials.map((social) => (
        <li
          key={social.title}
          className="group mr-8 inline-block first-of-type:ml-4 xl:first-of-type:ml-16"
        >
          <Social social={social} />
        </li>
      ))}
    </ul>
  );
}
