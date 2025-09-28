'use client';

import { useCallback, useState } from 'react';

interface UseCopyToClipboardProps {
  timeout?: number;
}

interface UseCopyToClipboardReturn {
  isCopied: boolean;
  copyToClipboard: (text: string) => Promise<boolean | undefined>;
  error: string | null;
}

export function useClipboard({
  timeout = 2000
}: UseCopyToClipboardProps = {}): UseCopyToClipboardReturn {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fallbackCopyToClipboard = useCallback(
    (text: string) => {
      try {
        // Create a temporary textarea element
        const textArea = document.createElement('textarea');
        textArea.value = text;

        // Make it invisible and non-interactive
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (successful) {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), timeout);
          return true;
        } else {
          console.error('useClipboard: Failed to copy text');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Copy failed';
        setError(errorMessage);
        console.error('useClipboard: Failed to copy text:', err);
        return false;
      }
    },
    [timeout]
  );

  const copyToClipboard = useCallback(
    async (text: string) => {
      if (!text) {
        setError('No text provided');
        return false;
      }

      // Reset previous states
      setError(null);
      setIsCopied(false);

      try {
        // Modern Clipboard API approach
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          setIsCopied(true);

          // Reset copied state after timeout
          setTimeout(() => setIsCopied(false), timeout);
          return true;
        }

        // Fallback for older browsers
        return fallbackCopyToClipboard(text);
      } catch (err) {
        console.warn(
          'useClipboard: Clipboard API failed, trying fallback...',
          err
        );
        return fallbackCopyToClipboard(text);
      }
    },
    [fallbackCopyToClipboard, timeout]
  );

  return { isCopied, copyToClipboard, error };
}
