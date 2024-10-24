import Technology from '@/components/sections/technology-section/technology';
import MoreItemsSection from '@/components/more-items-section';
import { technologies } from '@/components/sections/technology-section/data';

export default function TechnologyList() {
  return (
    <>
      <ul className="no-scrollbar overflow-hidden overflow-x-auto whitespace-nowrap pb-2">
        {technologies.map((technology, index) => {
          if (technology.priority === 'high')
            return (
              <li
                key={technology.title}
                className="group mr-8 inline-block first-of-type:ml-4 xl:first-of-type:ml-16"
              >
                <Technology
                  technology={technology}
                  isFirstItemInList={index === 0}
                />
              </li>
            );
        })}
      </ul>

      <div>
        <MoreItemsSection items={technologies} />
      </div>
    </>
  );
}
