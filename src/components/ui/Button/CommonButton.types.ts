import type { ComponentProps, MouseEvent, ReactNode } from "react";

type CommonButtonProps = {
  theme?: "default" | "pink" | "transparent";
  className?: string;
  children: ReactNode;
} & ComponentProps<"button">;

export type { CommonButtonProps };
