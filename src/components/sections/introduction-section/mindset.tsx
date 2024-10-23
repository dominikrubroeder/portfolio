import { cn } from '@/lib/utils';

export default function Mindset({ className }: { className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-screen-sm space-y-6', className)}>
      <h3>I like</h3>

      <ul className="mb-5 list-disc pl-8">
        <li>
          <b className="text-foreground">Designing</b> – with care, joy
        </li>
        <li>
          <b className="text-foreground">Coding</b> and
          <b className="text-foreground"> Building</b> – for production
        </li>
        <li>
          <b className="text-foreground">Using Psychology </b>
          to design and build better user interfaces
        </li>
        <li>Writing documentation</li>
        <li>Working for good brands, products or services</li>
        <li>Bringing an idea from paper to production</li>
        <li>Refining a feature to specific needs</li>
        <li>
          Pen and Paper: I don&apos;t have to &apos;draw&apos; – but fast
          sketching and scribbling can improve visualizing my ideas faster. I
          can also turn back to them later, when something else blocks the
          opportunity working on it immediately
        </li>
        <li>
          Notes: I like to take them. Similar to Pen and Paper work, it will
          help my brain to organize the current work on a task and summarize the
          outcome of it while being in the process. I often find myself with
          more clarity and a feeling of structure if i get stuck in a concept
          for too long
        </li>
      </ul>
    </div>
  );
}
