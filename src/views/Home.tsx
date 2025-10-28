import { ItemAction } from '@/components/item-action';
import { ItemsList } from '@/components/items-list';
import type { InsertItem, Item } from '@/type/item';
import { useState } from 'react';

function Home() {
  const [items, setItems] = useState<Item[]>([]);

  const handleSaveItem = (data: InsertItem) => {
    const newItem: Item = {
      id: Date.now().toString(),
      title: data.title,
      subTitle: data.subTitle,
      createdAt: new Date(),
    };
    setItems([...items, newItem]);
  };
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl">Items List</h2>
        <ItemAction
          mode="add"
          onSave={handleSaveItem}
          triggerText="Add New Todo"
        />
        <ItemsList items={items} />
      </div>
    </>
  );
}

export { Home };
