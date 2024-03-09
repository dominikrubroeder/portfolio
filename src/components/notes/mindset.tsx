import Accordion from '@/components/accordion';

export default function Mindset() {
  return (
    <Accordion title="Mindset">
      <h3 className="font-bold text-theme-contrary">
        Training, Training, Training and fun
      </h3>

      <br />

      <ul className="mb-5 list-disc pl-8">
        <li>Don&apos;t forget to have some fun during the process</li>
        <li>Enjoy colors</li>
        <li>Typography is important</li>
        <li>
          Engage with your co-workers, exchange your ideas, evaluate if another
          opinion has some truth in it
        </li>
        <li>Work with heart, mindfulness</li>
      </ul>

      <h3 className="font-bold text-theme-contrary">Pen and Paper</h3>

      <br />

      <ul className="mb-5 list-disc pl-8">
        <li>
          No worries, you don&apos;t have to &apos;draw&apos; – but fast
          sketching and scribble can improve visualize your ideas fast. Trust
          me, i also had to learn this and get rid of &apos;Ahh, i don&apos;t
          need this&apos;
        </li>
      </ul>

      <h3 className="font-bold text-theme-contrary">Notes</h3>

      <br />

      <ul className="list-disc pl-8">
        <li>
          Take notes. Just do it. It will help your brain organize the current
          task and summarize the outcome of your work while being in the
          process. You also will notice you will find more clarity and structure
          if you get stuck in a concept.
        </li>
      </ul>
    </Accordion>
  );
}
