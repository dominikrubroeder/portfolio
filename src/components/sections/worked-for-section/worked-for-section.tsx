import Section from '@/components/sections/section';
import Link from 'next/link';
import SegmuellerLogo from '@/components/ui/svg/segmueller-logo';
import AllesautoLogo from '@/components/ui/svg/allesauto-logo';
import HdplusLogo from '@/components/ui/svg/hdplus-logo';

export default function WorkedForSection() {
  return (
    <Section id="worked-for" className="flex-row justify-start">
      <div className="mx-auto">
        <ul className="mx-auto flex items-center gap-12">
          <li>
            <div className="flex gap-6">
              <div className="w-80 text-right">
                <div className="text-xl font-bold text-theme-contrary">HD+</div>
                <div>German HD-TV provider</div>
              </div>
              <Link
                href="https://www.hd-plus.de"
                title="Go to external HD+ website"
                aria-label="Go to external HD+ website"
                target="_blank"
                className="cursor-pointer"
              >
                <HdplusLogo className="h-14 w-auto" />
              </Link>
            </div>
          </li>
          <li>
            <div className="flex gap-6">
              <div className="w-80 text-right">
                <div className="text-xl font-bold text-theme-contrary">
                  Segmüller
                </div>
                <div>Furniture shop</div>
              </div>
              <Link
                href="https://www.segmueller.de"
                title="Go to external Segmüller shop"
                aria-label="Go to external Segmüller shop"
                target="_blank"
                className="cursor-pointer"
              >
                <SegmuellerLogo className="h-8 w-auto" colored />
              </Link>
            </div>
          </li>
          <li>
            <div className="flex gap-6">
              <div className="w-80 text-right">
                <div className="text-xl font-bold text-theme-contrary">
                  alles.auto
                </div>
                <div>Digital car dealership</div>
              </div>
              <Link
                href="https://www.alles.auto"
                title="Go to external alles.auto website"
                aria-label="Go to external alles.auto website"
                target="_blank"
                className="cursor-pointer"
              >
                <AllesautoLogo className="h-8 w-auto" colored />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
