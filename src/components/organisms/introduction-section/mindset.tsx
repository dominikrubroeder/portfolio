import { cn } from '@/lib/utils';

export default function Mindset({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        'mx-auto mb-5 w-full max-w-screen-sm list-disc pl-6',
        className
      )}
    >
      <li>
        <b className="text-foreground">Designing</b> – with care, joy, curiosity
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
      <li>Being mindful</li>
      <li>Working for good Brands, Products or Services</li>
      <li>Bringing an idea from paper to production</li>
      <li>Refining a feature to specific needs</li>
      <li>
        Pen and Paper: Fast sketching and scribbling improves visualizing ideas
        faster. We can also turn back to them later, when something else blocks
        the opportunity working on it immediately
      </li>
      <li>
        Notes: Similar to Pen and Paper work, it will help the brain to organize
        the current work on a task and summarize the outcome of it while being
        in the process. I often find myself with more clarity and a feeling of
        structure if i get stuck in a concept for too long
      </li>
      <li>
        Following these principles is a good way for me to start dealing daily
        on the things that matter
      </li>
    </ul>
  );
}
