"use client";

import { useCallback, useSyncExternalStore } from "react";

// const isSm = useMediaQuery("(max-width : 768px)");
// const isMd = useMediaQuery(
//     "(min-width : 769px) and (max-width : 992px)"
// );
// const isLg = useMediaQuery(
//     "(min-width : 993px) and (max-width : 1200px)"
// );
// const isXl = useMediaQuery(
//     "(min-width : 1201px)"
// );

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query],
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;
