import type { TabsItemProps } from "@/app/components/ui/Tabs/Tabs.types";
import { CommonButton } from "../../ui/Button/CommonButton";

const TabsItem = ({ label, isActive }: TabsItemProps) => {
  return (
    <div
      className={`${isActive ? "!bg-black text-white pointer-events-none" : "bg-white text-black cursor-pointer"} hover:bg-black/60 hover:text-white rounded-4xl p-6 select-none group flex items-center justify-center h-[42px] desktop:h-[50px] transition duration-500`}
    >
      {label}
    </div>
  );
};

export default TabsItem;
