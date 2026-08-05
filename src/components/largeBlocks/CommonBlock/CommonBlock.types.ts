import type { ReactNode } from "react";

type CommonBlockBtnType = {
  btnTitle: string;
  btnFunc?: () => void;
  btnLink?: string;
  btnTooltip?: { text: string; isTooltipOnTop: boolean };
};

type CommonBlockProps = {
  mainTitle?: string;
  leftTitle?: string;
  mainTitleColor?: "black" | "orange";
  hasBreadCrumbs?: boolean;
  btn?: CommonBlockBtnType;
  children: ReactNode;
};

export type { CommonBlockProps };
