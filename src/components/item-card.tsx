import { Card } from '@/components/ui/card';
import type { Item } from '@/type/item';

function ItemCard({ item }: { item: Item }) {
  return (
    <Card className="p-2 gap-4">
      <h4 className="text-xl">{item.title}</h4>
      <h5 className="text-l">{item.subTitle}</h5>
      <h6>{new Date(item.createdAt).toLocaleString()}</h6>
    </Card>
  );
}

export default ItemCard;
