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
          <b className="text-foreground">Coding</b> – for production
        </li>
        <li>
          <b className="text-foreground">Using Psychology </b>
          to design and build better user interfaces
        </li>
        <li>Writing documentation</li>
        <li>Bringing an idea from paper to production</li>
        <li>Refining a feature to specific needs</li>
        <li>Working for good brands</li>
        <li>
          Pen and Paper: You don&apos;t have to &apos;draw&apos; – but fast
          sketching and scribble can improve visualize your ideas fast. I also
          had to learn this and get rid of &apos;Ahh, i don&apos;t need
          this&apos;
        </li>
        <li>
          Notes. I like to do it. It will help my brain organize the current
          task and summarize the outcome of your work while being in the
          process. You also will notice you will find more clarity and structure
          if you get stuck in a concept.
        </li>
      </ul>
    </div>
  );
}
