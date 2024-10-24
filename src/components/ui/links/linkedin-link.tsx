import LinkedinIcon from '@/components/ui/svg/linkedin-icon';
import Button from '@/components/atoms/button';

export default function LinkedinLink({ className }: { className?: string }) {
  return (
    <Button
      variant="secondary"
      href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
      target="_blank"
      title="LinkedIn Dominik Rubröder"
      aria-label="Go to external LinkedIn page from Dominik Rubröder"
    >
      <LinkedinIcon className={className} />
    </Button>
  );
}
