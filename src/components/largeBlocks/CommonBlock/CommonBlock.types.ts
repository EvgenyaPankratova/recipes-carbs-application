import type { ReactNode } from "react";

type CommonBlockBtnType = {
  btnTitle: string;
  btnFunc?: string;
  btnLink?: string;
};

type CommonBlockProps = {
  mainTitle?: string;
  leftTitle?: string;
  mainTitleColor?: "black" | "orange";
  btn?: CommonBlockBtnType;
  children: ReactNode;
};

export type { CommonBlockProps };
