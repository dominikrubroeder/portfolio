import Accordion from '@/components/ui/accordion';

export default function Books() {
  return (
    <Accordion title="Books">
      <h3 className="font-bold text-theme-contrary">Book recommendations</h3>

      <br />

      <ul className="mb-5 list-disc pl-8">
        <li>
          The Design of Everyday Things – <i>Don Norman</i>
        </li>
        <li>
          Refactoring UI – <i>Adam Wathan, Steve Schoger</i>
        </li>
        <li>
          Practical UI – <i>Adham Dannaway</i>
        </li>
        <li>
          The Path to Senior Product Designer – <i>Artiom Dashinsky</i>
        </li>
        <li>
          Atomic Design – <i>Brad Frost</i>
        </li>
        <li>
          Laws of UX – <i>Jon Yablonski</i>
        </li>
        <li>
          User Friendly – <i>Cliff Kuang with Robert Fabricant</i>
        </li>
        <li>
          Neurowebdesign – <i>Jonas Reggelin</i>
        </li>
        <li>
          The Creative Act: A Way of Being – <i>Rick Rubin</i>
        </li>
      </ul>
    </Accordion>
  );
}
