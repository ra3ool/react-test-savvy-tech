import { Card } from '@/components/ui/card';
import type { ItemCardProps } from '@/type/item';
import { EditIcon, TrashIcon } from 'lucide-react';
import { ItemAction } from './item-action';

function ItemCard({ item, onEdit, onDelete }: ItemCardProps) {
  const handleEdit = (data: { title: string; subTitle?: string }) => {
    onEdit(item.id, data);
  };

  return (
    <Card className="flex-row p-2 gap-4">
      <div className="flex flex-col flex-1 gap-2">
        <h4 className="text-xl">{item.title}</h4>
        <h5 className="text-l">{item.subTitle}</h5>
        <h6>{new Date(item.createdAt).toLocaleString()}</h6>
      </div>
      <div className="flex flex-col justify-around shrink-0">
        <ItemAction
          item={item}
          mode="edit"
          onSave={handleEdit}
          trigger={
            <EditIcon className="cursor-pointer text-blue-400 w-5 h-5" />
          }
        />
        <TrashIcon
          className="cursor-pointer text-red-400 w-5 h-5"
          onClick={() => onDelete(item.id)}
        />
      </div>
    </Card>
  );
}

export { ItemCard };
