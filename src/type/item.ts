export type Item = {
  id: string;
  title: string;
  subTitle: string;
  createdAt: Date;
};

export type InsertItem = Omit<Item, 'id' | 'createdAt'>;

export type ItemActionProps = {
  item?: Item;
  mode: 'add' | 'edit';
  onSave: (data: InsertItem) => void;
  triggerText?: string;
  trigger?: React.ReactNode;
};

export type DeleteActionProps = {
  itemTitle: string;
  onDelete: () => void;
  trigger?: React.ReactNode;
};

export type ItemListProps = {
  items: Item[];
  onEdit: (id: string, data: { title: string; subTitle?: string }) => void;
  onDelete: (id: string) => void;
};

export type ItemCardProps = {
  item: Item;
  onEdit: ItemListProps['onEdit'];
  onDelete: ItemListProps['onDelete'];
};
