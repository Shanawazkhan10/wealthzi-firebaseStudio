'use client';

import { useMemo, useRef } from 'react';

type Ux4gImageProtectionOptions = {
  className?: string;
};

export function useUx4gImageProtection(options?: Ux4gImageProtectionOptions) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const containerProps = useMemo(
    () => ({
      ref: containerRef,
      'data-preserve-media': 'true' as const,
      className: options?.className,
    }),
    [options?.className]
  );

  return {
    containerRef,
    containerProps,
  };
}
