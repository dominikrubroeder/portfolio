import Image from 'next/image';
import { convertObjectToArray } from '@/helpers';

async function getGitHubUser(userName: string) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  return await res.json();
}

export default async function GitHub() {
  const gitHubUser = await getGitHubUser('dominikrubroeder');
  const gitHubUserArray = convertObjectToArray(gitHubUser);

  return (
    <div className="grid gap-4">
      <header className="flex gap-4">
        <button>
          <Image
            src={gitHubUser.avatar_url}
            alt={gitHubUser.name}
            width={32}
            height={32}
            className="rounded-full"
          />
        </button>
      </header>

      <div className="bg-gray-950 p-4">
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
