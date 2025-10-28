import { cn } from '@/lib/utils';

function TheHeader({ title, className }: { title: string; className: string }) {
  return (
    <header className={cn('shadow flex items-center px-12 overflow-hidden', className)}>
      <div className="text-xl font-bold">{title}</div>
      {/* we can add action to header later */}
    </header>
  );
}

export { TheHeader };
