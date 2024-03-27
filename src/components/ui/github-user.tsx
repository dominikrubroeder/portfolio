import Image from 'next/image';
import { convertObjectToArray } from '@/lib/helpers';

async function getGitHubUser(userName: string) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  return await res.json();
}

export default async function GithubUser() {
  const gitHubUser = await getGitHubUser('dominikrubroeder');
  const gitHubUserArray = convertObjectToArray(gitHubUser);

  return (
    <div className="relative ml-auto grid max-w-lg gap-4">
      <header className="flex justify-end gap-4">
        <Image
          src={gitHubUser.avatar_url}
          alt={gitHubUser.name}
          width={32}
          height={32}
          className="shrink-0 rounded-full"
        />
      </header>

      <div className="absolute right-0 top-12 z-50 max-h-[50vh] overflow-hidden overflow-y-auto rounded bg-white/5 p-4">
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
