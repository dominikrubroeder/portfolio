import { getTechnologies } from '@/lib';
import Technology from '@/components/technology/Technology';
import MoreItemsSection from '@/components/MoreItemsSection';

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
            className="group mr-8 inline-block first-of-type:ml-16"
          >
            <Technology technology={technology} />
          </li>
        ))}
      </ul>

      <div className="ml-16">
        <MoreItemsSection items={technologies} />
      </div>
    </>
  );
}
