import Link from 'next/link';
import { Container } from '@/components/atoms/container';
import {
  AllesautoLogo,
  HdPlusLogo,
  SegmuellerLogo
} from '@/components/atoms/logo';

export default function WorkedForSection() {
  return (
    <Container
      as="section"
      id="worked-for"
      className="flex-row justify-start space-y-8"
    >
      <div className="mx-auto">
        <ul className="mx-auto flex items-center gap-12">
          <li>
            <div className="flex gap-6">
              <div className="w-80 text-right">
                <div className="text-xl font-bold text-foreground">HD+</div>
                <div>German HD-TV provider</div>
              </div>
              <Link
                href="https://www.hd-plus.de"
                title="Go to external HD+ website"
                aria-label="Go to external HD+ website"
                target="_blank"
                className="cursor-pointer"
              >
                <HdPlusLogo className="h-14 w-auto" />
              </Link>
            </div>
          </li>
          <li>
            <div className="flex gap-6">
              <div className="w-80 text-right">
                <div className="text-xl font-bold text-foreground">
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
                <div className="text-xl font-bold text-foreground">
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
    </Container>
  );
}
