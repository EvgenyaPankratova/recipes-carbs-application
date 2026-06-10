import Default from "@/app/components/ui/Button/Default/Default";
import Transparent from "@/app/components/ui/Button/Transparent/Transparent";
import type { TabsProps } from "@/app/components/ui/Tabs/Tabs.types";
import TabsItem from "./TabsItem";

const Tabs = ({ items, checkoutOption, activeTabLabel }: TabsProps) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={
            item.label !== activeTabLabel
              ? () => {
                  checkoutOption(item.label);
                }
              : undefined
          }
        >
          <TabsItem
            label={item.label}
            isActive={item.label === activeTabLabel}
          />
        </div>
      ))}
    </>
  );
};

export default Tabs;
