import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Brand from '@/components/atoms/brand';
import Button from '@/components/atoms/button';
import ExperienceBar from '@/components/atoms/experience-bar';
import { Tool as ToolType } from '@/components/organisms/tools/types';
import { CertificateDrawer } from '@/components/organisms/certificate-drawer';

export default function Tool({
  tool,
  isFirstItemInList
}: {
  tool: ToolType;
  isFirstItemInList: boolean;
}) {
  return (
    <div className="group relative w-80 space-y-6">
      <Link
        href={tool.website}
        className="interactive hover:bg-muted relative mx-auto flex size-80 cursor-pointer items-center justify-center rounded-xl border transition"
        target="_blank"
        title={`Go to ${tool.title} website`}
        aria-label={`Go to ${tool.title} website`}
      >
        <Brand
          brand={tool.title}
          className="h-32 w-auto"
          aria-label={`${tool.title} logo`}
        />

        <ExperienceBar
          progress={tool.knowledge}
          className="absolute bottom-4 right-5"
        />
      </Link>

      <div className="text-foreground mx-auto w-max rounded-3xl border px-3 py-2 font-bold">
        {tool.type}
      </div>

      <div className="h-20">
        <div className="mx-auto flex items-center justify-center gap-1">
          <Link
            href={tool.website}
            className="text-foreground font-bold"
            target="_blank"
            title={`Go to external ${tool.title} website`}
            aria-label={`Go to external ${tool.title} website`}
          >
            <h2>{tool.title}</h2>
          </Link>

          {tool.certificate && (
            <CertificateDrawer
              title={tool.title}
              certificate={tool.certificate}
              certificateTitle={tool.certificateTitle}
              certificateDescription={tool.certificateDescription}
              certificateMaterial={tool.certificateMaterial}
            />
          )}
        </div>

        <p className="line-clamp-2 text-center italic">{tool.description}</p>
      </div>

      <div
        className={`${
          isFirstItemInList
            ? 'visible translate-y-0 opacity-100'
            : 'sm:invisible sm:translate-y-4 sm:opacity-0'
        } text-center transition sm:group-hover:visible sm:group-hover:translate-y-0 sm:group-hover:opacity-100`}
      >
        <Button
          variant="secondary"
          asLink
          href={tool.website}
          target="_blank"
          title={`Go to external ${tool.title} website`}
          aria-label={`Go to external ${tool.title} website`}
          className="mx-auto"
        >
          <span className="sr-only">Open</span>
          <ArrowTopRightOnSquareIcon
            className={`${
              isFirstItemInList
                ? 'text-foreground'
                : 'group-hover:text-foreground'
            } size-5 transition`}
          />
        </Button>
      </div>
    </div>
  );
}
