import { ItemAction } from '@/components/item-action';
import { ItemsList } from '@/components/items-list';
import { useItemsReducer } from '@/hooks/useItemsReducer';
import type { InsertItem } from '@/type/item';

function Home() {
  const { items, addItem, updateItem, deleteItem } = useItemsReducer();

  const handleSaveItem = (data: InsertItem) => {
    addItem(data);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl">Items List</h2>
        <ItemAction
          mode="add"
          onSave={handleSaveItem}
          triggerText="Add New Item"
        />
        <ItemsList items={items} onEdit={updateItem} onDelete={deleteItem} />
      </div>
    </>
  );
}

export { Home };
