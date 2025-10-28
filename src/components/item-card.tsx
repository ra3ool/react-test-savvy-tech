import { ItemAction } from '@/components/item-action';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Card } from '@/components/ui/card';
import type { ItemCardProps } from '@/type/item';
import { EditIcon, TrashIcon } from 'lucide-react';

function ItemCard({ item, onEdit, onDelete }: ItemCardProps) {
  const handleEdit = (data: { title: string; subTitle: string }) => {
    onEdit(item.id, data);
  };

  return (
    <Card className="flex-row p-3 gap-4 overflow-hidden">
      <div className="flex flex-col flex-1 gap-2">
        <h4 className="text-xl line-clamp-1">{item.title}</h4>
        <h5 className="text-l line-clamp-1">{item.subTitle}</h5>
        <h6 className="line-clamp-1">
          {new Date(item.createdAt).toLocaleString()}
        </h6>
      </div>
      <div className="flex flex-col justify-around shrink-0">
        <ItemAction
          item={item}
          mode="edit"
          onSave={handleEdit}
          trigger={
            <EditIcon className="cursor-pointer text-blue-500 hover:text-blue-600 w-5 h-5 transition-colors" />
          }
        />

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <TrashIcon className="cursor-pointer text-red-500 hover:text-red-600 w-5 h-5 transition-colors" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                item "<strong>{item.title}</strong>" from your list.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => onDelete(item.id)}
                className="bg-red-600 hover:bg-red-700"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  );
}

export { ItemCard };
