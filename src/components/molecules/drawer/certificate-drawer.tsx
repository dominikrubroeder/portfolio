'use client';

import Link from 'next/link';

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';

import { Button } from '@/components/atoms/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/molecules/drawer';

export function CertificateDrawer({
  title,
  certificate,
  certificateTitle,
  certificateDescription,
  certificateMaterial
}: {
  title: string;
  certificate: string;
  certificateTitle: string;
  certificateDescription: string;
  certificateMaterial: string;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost-foreground">
          <span className="sr-only text-xs">Certified</span>
          <CheckBadgeIcon className="size-5 shrink-0 text-primary" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-(--breakpoint-sm)">
          <DrawerHeader className="text-foreground">
            <DrawerTitle>Certificate for {title}</DrawerTitle>

            <p>{certificate}</p>

            <DrawerDescription>
              <Link
                className="group flex items-center gap-2 transition"
                href={certificateMaterial}
                target="_blank"
                title={`Open ${title} course materials in separate tab`}
                aria-label={`Open ${title} course materials in separate tab`}
              >
                <ArrowUpRightIcon className="size-4 shrink-0 text-primary" />

                <span className="group-hover:text-foreground">
                  {certificateTitle}
                </span>
              </Link>
            </DrawerDescription>
          </DrawerHeader>

          <div className="space-y-4 p-4 pb-0">
            <div className="rounded border p-4">PDF preview here</div>

            <div>{parse(certificateDescription)}</div>
          </div>

          <DrawerFooter>
            <DrawerClose className="order-1" asChild>
              <Button>Got it</Button>
            </DrawerClose>

            <Button variant="ghost-foreground" className="order-1">
              Download Certificate
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
