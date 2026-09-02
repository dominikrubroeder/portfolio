import { Button } from '@/components/atoms/button';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

export function ButtonDownloadCv({
  showLabel = true
}: {
  showLabel?: boolean;
}) {
  return (
    <Button
      variant="contained-foreground"
      href="/Dominik-Rubröder-Lebenslauf-2026.pdf"
      download
    >
      <ArrowDownTrayIcon /> {showLabel && <>Download CV (DE)</>}
    </Button>
  );
}
