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
};
