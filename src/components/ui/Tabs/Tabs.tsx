import type { TabsProps } from "@/components/ui/Tabs/Tabs.types";
import TabsItem from "./TabsItem";

const Tabs = ({ items, checkoutOption, activeTabLabel }: TabsProps) => {
  return (
    <>
      {items.map((item) => (
        <button
          type="button"
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
        </button>
      ))}
    </>
  );
};

export default Tabs;
