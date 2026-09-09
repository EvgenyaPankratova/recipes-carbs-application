import type { Dispatch, SetStateAction } from "react";

type RecommendedProps = {
  setIsRecommendedOpen: Dispatch<SetStateAction<boolean>>;
  isRecommendedOpen: boolean;
};

export type { RecommendedProps };
