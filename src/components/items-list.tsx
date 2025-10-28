import type { ItemListProps } from '@/type/item';
import { ItemCard } from './item-card';

function ItemsList({ items, onEdit, onDelete }: ItemListProps) {
  // we can add some sorting here

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No items yet. Add your first item!
      </div>
    );
  }

  return (
    <>
      {items?.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export { ItemsList };
