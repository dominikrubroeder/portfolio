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
        {technologies.map((technology, index) => {
          if (technology.priority === 'high')
            return (
              <li
                key={technology.title}
                className="group mr-8 inline-block first-of-type:ml-4 sm:first-of-type:ml-16"
              >
                <Technology
                  technology={technology}
                  isFirstItemInList={index === 0}
                />
              </li>
            );
        })}
      </ul>

      <div className="ml-4 sm:ml-16">
        <MoreItemsSection items={technologies} />
      </div>
    </>
  );
}
