'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

function InvestmentCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(String(principal));
    const r = parseFloat(String(rate)) / 100;
    const t = parseFloat(String(years));
    if (p > 0 && r > 0 && t > 0) {
      const value = p * Math.pow(1 + r, t);
      setFutureValue(value);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Future Value Calculator</CardTitle>
        <CardDescription>Estimate the future value of your lump-sum investment.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div>
              <Label htmlFor="principal">Investment Amount (₹)</Label>
              <Input id="principal" type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
            </div>
            <div>
              <Label htmlFor="rate">Expected Annual Return (%)</Label>
              <Input id="rate" type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
            </div>
            <div>
              <Label htmlFor="years">Investment Period (Years)</Label>
              <Input id="years" type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
            </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Button onClick={calculate} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
          <Calculator className="mr-2 h-4 w-4" /> Calculate
        </Button>
        {futureValue !== null && (
          <div className="mt-6 p-4 bg-secondary rounded-lg w-full">
            <p className="text-muted-foreground">Estimated Future Value:</p>
            <p className="text-2xl font-bold text-primary">
              ₹ {futureValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}


export default function Calculators() {
  return (
    <section id="explore" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary">
            Investment Calculator Tools
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Plan for your financial goals with our easy-to-use calculators.
          </p>
        </div>
        <Tabs defaultValue="investment" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="investment">Investment Returns</TabsTrigger>
            <TabsTrigger value="retirement" disabled>Retirement Planning</TabsTrigger>
          </TabsList>
          <TabsContent value="investment">
            <InvestmentCalculator />
          </TabsContent>
          <TabsContent value="retirement">
            <Card>
              <CardHeader>
                <CardTitle>Retirement Planner</CardTitle>
                <CardDescription>Coming soon! Plan your retirement corpus.</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
