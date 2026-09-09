"use client";

import { useState } from "react";
import type { TooltipProps } from "@/components/smallBlocks/Tooltip/Tooltip.types";

export const Tooltip = ({
  text,
  isTooltipOnTop = false,
  children,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <button
      type="button"
      className="relative cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className={`
          absolute max-w-[300px] left-1/2 -translate-x-1/2
          bg-lightPink/80 rounded-lg border-2 border-black p-2
          text-[clamp(0.5rem,1.6vw,0.8rem)] 
          transition-opacity duration-300 pointer-events-none
          ${isVisible ? "opacity-100" : "opacity-0"}
          ${isTooltipOnTop ? "-top-10" : "top-[90%] xl:top-[110%]"}
        `}
      >
        {text}
      </div>
    </button>
  );
};
