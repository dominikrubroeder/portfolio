'use client';

import { useCallback } from 'react';

import { CheckIcon } from '@heroicons/react/16/solid';
import { ClipboardCopy } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';

import { useClipboard } from '@/hooks/use-clipboard';

export function CodeBlock({
  code,
  fileName,
  language = 'tsx',
  showLineNumber,
  borderless,
  className
}: {
  code: string;
  fileName: string;
  language?: 'jsx' | 'tsx' | 'css' | 'html';
  showLineNumber?: boolean;
  borderless?: boolean;
  className?: string;
}) {
  const { isCopied, copyToClipboard } = useClipboard({ timeout: 2000 });

  const handleCopyToClipboard = useCallback(async () => {
    await copyToClipboard(code);
  }, [code, copyToClipboard]);

  return (
    <code
      className={cn(
        'grid w-full gap-4 rounded border px-6 pt-6 font-mono',
        borderless && 'border-none px-0',
        className
      )}
    >
      <span className="max-h-[65svh] overflow-auto">
        <Highlight theme={themes.vsLight} code={code} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn('rounded p-4 font-mono', className)}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {showLineNumber && <span className="mr-6">{i + 1}</span>}

                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </span>

      <span className="sticky bottom-0 flex items-center justify-between gap-4 border-t bg-background py-3">
        <span className="font-mono">{fileName}</span>

        <ButtonGroup>
          <Button variant="ghost" onClick={() => handleCopyToClipboard()}>
            <span className="sr-only">Copy {fileName} code snippet</span>
            {isCopied ? <CheckIcon /> : <ClipboardCopy />}
          </Button>
        </ButtonGroup>
      </span>
    </code>
  );
}
