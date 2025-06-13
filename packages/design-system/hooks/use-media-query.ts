import * as React from 'react';

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === 'undefined';

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = React.useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  useIsomorphicLayoutEffect(() => {
    const abortController = new AbortController();
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener('change', () => setMatches(getMatches(query)), {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [query]);

  return matches;
}
