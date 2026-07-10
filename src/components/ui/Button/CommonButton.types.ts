import type { ComponentProps, MouseEvent, ReactNode } from "react";

type CommonButtonProps = {
  theme?: "default" | "pink" | "orange" | "transparent";
  className?: string;
  children: ReactNode;
} & ComponentProps<"button">;

export type { CommonButtonProps };
