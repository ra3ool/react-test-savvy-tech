import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { itemSchema } from '@/schemas/item';
import type { InsertItem, ItemActionProps } from '@/type/item';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

const ItemAction = memo(
  ({ item, mode, onSave, triggerText, trigger }: ItemActionProps) => {
    const [open, setOpen] = useState(false);
    const isEdit = mode === 'edit';

    const form = useForm<InsertItem>({
      resolver: zodResolver(itemSchema),
      defaultValues: {
        title: item?.title ?? '',
        subTitle: item?.subTitle ?? '',
      },
    });

    const onSubmit = useCallback(
      (data: InsertItem) => {
        onSave(data);
        setOpen(false);
        form.reset();
      },
      [onSave, form],
    );

    const handleOpenChange = useCallback(
      (isOpen: boolean) => {
        setOpen(isOpen);
        if (isOpen) {
          form.reset({
            title: item?.title ?? '',
            subTitle: item?.subTitle ?? '',
          });
        } else {
          form.reset();
        }
      },
      [form, item?.title, item?.subTitle],
    );

    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          {trigger || (
            <Button
              className="w-fit bg-blue-600 hover:bg-blue-700"
              variant={isEdit ? 'outline' : 'default'}
            >
              {triggerText || (isEdit ? 'Edit Item' : 'Add Item')}
            </Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEdit ? 'Edit Item' : 'Add Item'}</DialogTitle>
            <DialogDescription>
              {isEdit
                ? 'Update the item details below.'
                : 'Fill in the fields to add a new item to your list.'}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter item title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subtitle</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter item subtitle" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="gap-2">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  {isEdit ? 'Update Item' : 'Add Item'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  },
);

export { ItemAction };
