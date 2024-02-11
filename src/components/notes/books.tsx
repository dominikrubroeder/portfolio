import Accordion from '@/components/accordion';

export default function Books() {
  return (
    <Accordion title="Books">
      <h3 className="font-bold text-theme-contrary">Book Recommendations</h3>

      <br />

      <ul className="mb-5 list-disc pl-8">
        <li>
          The Design of Everyday Things – <i>Don Norman</i>
        </li>
        <li>
          Neurowebdesign – <i>Jonas Reggelin</i>
        </li>
        <li>
          The Creative Act: A Way of Being – <i>Rick Rubin</i>
        </li>
        <li>
          Refactoring UI – <i>Steve Schroger, Adam Wathan</i>
        </li>
      </ul>
    </Accordion>
  );
}
