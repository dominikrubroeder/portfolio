import Mindset from '@/components/notes/mindset';
import UxRole from '@/components/notes/ux-role';
import Books from '@/components/notes/books';
import UxPredicatesDesigner from '@/components/notes/ux-predicates-designer';
import UxPredicatesUxEngineer from '@/components/notes/ux-predicates-ux-engineer';

export default function NotesSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <UxRole />
        <Mindset />
        <Books />
        <UxPredicatesDesigner />
        <UxPredicatesUxEngineer />
      </div>
    </section>
  );
}
