import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button';

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
      iconOnly={!showLabel}
      label="Download CV (DE)"
    >
      <ArrowDownTrayIcon /> {showLabel && <>Download CV (DE)</>}
    </Button>
  );
}
