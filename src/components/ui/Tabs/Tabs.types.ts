type TabItem = {
  id: string;
  is_active: boolean;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  checkoutOption: (label: string) => void;
  activeTabLabel: string;
};

type TabsItemProps = {
  label: string;
  isActive: boolean;
};

export type { TabsItemProps, TabsProps };
