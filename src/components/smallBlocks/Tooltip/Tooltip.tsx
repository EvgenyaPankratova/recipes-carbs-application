import {TooltipProps} from "@/components/smallBlocks/Tooltip/Tooltip.types";

export const Tooltip = ({text}: TooltipProps) => {
    return <div className="absolute bg-orange/80 rounded-lg border-black border-2 p-2 text-[clamp(0.6rem,1.8vw,0.8rem)]">
        {text}
    </div>
}
