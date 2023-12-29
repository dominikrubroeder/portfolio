import { getTechnologies } from '@/lib';
import Technology from '@/components/technology/Technology';
import TechnologyMoreOn from '@/components/technology/TechnologyMoreOn';

export default async function TechnologyList() {
  const technologies = await getTechnologies();

  if (
    technologies === null ||
    technologies === undefined ||
    technologies.length === 0
  )
    return <div>No technology listed.</div>;

  return (
    <>
      <ul className="no-scrollbar overflow-hidden overflow-x-auto whitespace-nowrap pb-2">
        {technologies.map((technology) => (
          <li
            key={technology.title}
            className="group inline-block mr-8 first-of-type:ml-16"
          >
            <Technology technology={technology} />
          </li>
        ))}
      </ul>

      <div className="ml-16">
        <TechnologyMoreOn technologies={technologies} />
      </div>
    </>
  );
}
