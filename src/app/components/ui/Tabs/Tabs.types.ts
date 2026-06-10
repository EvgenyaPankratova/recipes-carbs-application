type TabItem = {
  id: string;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  checkoutOption: () => {};
  activeTabLabel: string;
};

type TabsItemProps = {
  label: string;
  isActive: boolean;
};

export type { TabsItemProps, TabsProps };
