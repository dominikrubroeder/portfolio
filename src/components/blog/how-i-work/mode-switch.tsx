'use client';

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import React from 'react';
import { motion } from 'framer-motion';

export default function ModeSwitch() {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();

  const mode = searchParams.get('mode');

  const isDesignMode = !!(
    searchParams.get('mode') && searchParams.get('mode') === 'design'
  );
  const isDevelopmentMode = !!(
    searchParams.get('mode') && searchParams.get('mode') === 'development'
  );

  return (
    <div className="inline-flex items-center gap-4 py-4">
      <button
        className="relative py-3"
        onClick={() =>
          updateSearchParams({ withName: 'mode', withValue: 'design' })
        }
      >
        {(mode === null || isDesignMode) && (
          <motion.span
            layoutId="tab"
            className="absolute inset-0 z-10 bg-gray-4"
            style={{ borderRadius: 9999 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span
          className={`relative z-10 p-4 ${
            mode === null || isDesignMode ? 'text-theme-contrary' : 'text-muted'
          }`}
        >
          Design
        </span>
      </button>

      <button
        className="relative py-3"
        onClick={() =>
          updateSearchParams({ withName: 'mode', withValue: 'development' })
        }
      >
        {isDevelopmentMode && (
          <motion.span
            layoutId="tab"
            className="absolute inset-0 z-10 bg-gray-4"
            style={{ borderRadius: 9999 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span
          className={`relative z-10 p-4 ${
            isDevelopmentMode ? 'text-theme-contrary' : 'text-muted'
          }`}
        >
          Development
        </span>
      </button>
    </div>
  );
}
