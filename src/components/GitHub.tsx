import Image from 'next/image';
import { convertObjectToArray } from '@/lib/helpers';

async function getGitHubUser(userName: string) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  return await res.json();
}

export default async function GitHub() {
  const gitHubUser = await getGitHubUser('dominikrubroeder');
  const gitHubUserArray = convertObjectToArray(gitHubUser);

  return (
    <div className="grid gap-4 relative max-w-lg ml-auto">
      <header className="flex gap-4 justify-end">
        <Image
          src={gitHubUser.avatar_url}
          alt={gitHubUser.name}
          width={32}
          height={32}
          className="rounded-full shrink-0"
        />
      </header>

      <div className="bg-white/5 p-4 max-h-[50vh] overflow-hidden overflow-y-auto rounded absolute top-12 right-0 z-50">
        <code className="text-xs">
          <span>{`{`}</span>
          <ul className="grid gap-2">
            {gitHubUserArray.map((property) => (
              <li key={property.key} className="pl-4">
                {property.key}: {`'`}
                {property.value}
                {`'`}
              </li>
            ))}
          </ul>
          <span>{`}`}</span>
        </code>
      </div>
    </div>
  );
}
