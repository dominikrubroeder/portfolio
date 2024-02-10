import Mindset from '@/components/notes/mindset';
import UxRole from '@/components/notes/ux-role';
import Books from '@/components/notes/books';
import UxPredicates from '@/components/notes/ux-predicates';

export default function NotesSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-2xl">
        <UxRole />
        <Mindset />
        <Books />
        <UxPredicates />
      </div>
    </section>
  );
}
