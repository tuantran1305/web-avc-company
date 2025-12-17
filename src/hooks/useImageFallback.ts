"use client";

import { useCallback, useMemo, useState } from "react";

// Cycles through a list of image URLs until one loads successfully.
export function useImageFallback(candidates: string[]) {
  const urls = useMemo(() => candidates.filter(Boolean), [candidates]);
  const [index, setIndex] = useState(0);

  const onError = useCallback(() => {
    setIndex((i) => Math.min(i + 1, urls.length - 1));
  }, [urls.length]);

  return { src: urls[index], onError } as const;
}
