import React from 'react';
import Marker from '@/components/atoms/marker';
import Button from '../atoms/button';
import {DocumentTextIcon, EnvelopeIcon} from '@heroicons/react/24/outline';

export default function HomeHeroSection() {
    return (
        <section
            id="hero"
            className="mx-auto flex max-w-(--breakpoint-md) items-center justify-center space-y-4 px-4 pb-14 pt-8 lg:min-h-[78svh]"
        >
            <div className="space-y-2">
                <h2 className="text-6xl font-bold text-foreground sm:text-8xl">
                    Team Frontend
                </h2>

                <div className="space-y-8">
                    <div>
                        <div className="mx-1 text-3xl font-bold leading-relaxed text-primary">
                            Build your vision
                        </div>

                        <p className="mx-1 text-xl font-bold leading-relaxed text-primary">
                            <Marker animate>Building user interfaces that
                                work</Marker>, with a little bit of psychology
                            behind – <br className="hidden lg:inline-block"/> And therefore,
                            a better user experience.
                        </p>
                    </div>

                    <div className="space-x-3">
                        <Button variant="primary">
                            <DocumentTextIcon className="size-5 shrink-0"/> Read more
                        </Button>

                        <Button variant="outline">
                            <EnvelopeIcon className="size-5 shrink-0"/> Contact
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
