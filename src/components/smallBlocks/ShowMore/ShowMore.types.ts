import type { Dispatch, SetStateAction } from "react";

type ShowMoreProps = {
  total: number;
  visibleCount: number;
  setVisibleCount: Dispatch<SetStateAction<number>>;
  step: number;
};

export type { ShowMoreProps };
