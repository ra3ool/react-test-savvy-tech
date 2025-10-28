import type { Item } from '@/type/item';
import ItemCard from './item-card';

function ItemsList({ items }: { items: Item[] }) {
  return (
    <>
      {items?.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </>
  );
}

export { ItemsList };
