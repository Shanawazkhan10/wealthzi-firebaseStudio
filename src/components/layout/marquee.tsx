'use client';

export default function Marquee() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-2">
          <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
          <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
          <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
          <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
          <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
           <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
           <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
           <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
           <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
           <span className="mx-4 text-sm font-medium">Nivesh Acquires Wealthzi: Transforming Wealth Management</span>
        </div>
      </div>
    </div>
  );
}
