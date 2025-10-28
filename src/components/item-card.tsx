import { DeleteAction } from '@/components/delete-action';
import { ItemAction } from '@/components/item-action';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { ItemCardProps } from '@/type/item';
import { EditIcon, TrashIcon } from 'lucide-react';

function ItemCard({ item, onEdit, onDelete }: ItemCardProps) {
  const handleEdit = (data: { title: string; subTitle: string }) => {
    onEdit(item.id, data);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <Card className="flex-row p-3 gap-4 overflow-hidden">
      <div className="flex flex-col flex-1 gap-2">
        <h4 className="text-xl font-semibold line-clamp-1">{item.title}</h4>
        <h5 className="text-lg text-muted-foreground line-clamp-1">
          {item.subTitle}
        </h5>
        <h6 className="text-sm text-muted-foreground line-clamp-1">
          {new Date(item.createdAt).toLocaleString()}
        </h6>
      </div>
      <div className="flex flex-col justify-around shrink-0">
        <ItemAction
          item={item}
          mode="edit"
          onSave={handleEdit}
          trigger={
            <Button variant="ghost" size="icon">
              <EditIcon className="text-blue-500" />
            </Button>
          }
        />

        <DeleteAction
          itemTitle={item.title}
          onDelete={handleDelete}
          trigger={
            <Button variant="ghost" size="icon">
              <TrashIcon className="text-red-500" />
            </Button>
          }
        />
      </div>
    </Card>
  );
}

export { ItemCard };
