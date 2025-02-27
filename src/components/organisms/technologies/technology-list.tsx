import Technology from '@/components/organisms/technologies/technology';
import { technologies } from '@/components/organisms/technologies/data';

export default function TechnologyList() {
  return (
    <>
      <ul className="no-scrollbar overflow-hidden overflow-x-auto pb-2 whitespace-nowrap">
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
    </>
  );
}
