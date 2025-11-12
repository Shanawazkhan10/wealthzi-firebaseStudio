import { Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 text-xl font-bold font-heading text-primary',
        className
      )}
      {...props}
    >
      <Landmark className="h-6 w-6 text-secondary" />
      <span className="mt-1">Wealthzi</span>
    </div>
  );
}
