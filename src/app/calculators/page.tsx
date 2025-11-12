'use client';

import React, { useState, useMemo } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const { chartData, totalInvested, wealthGain, expectedAmount } =
    useMemo(() => {
      const i = rateOfReturn / 100 / 12;
      const n = timePeriod * 12;
      const P = monthlyInvestment;

      const expectedAmount = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      const totalInvested = P * n;
      const wealthGain = expectedAmount - totalInvested;

      const data = Array.from({ length: timePeriod + 1 }, (_, year) => {
        const currentN = year * 12;
        const futureValue =
          P * ((Math.pow(1 + i, currentN) - 1) / i) * (1 + i);
        const invested = P * currentN;
        return {
          year,
          'Expected Amount': futureValue,
          'Total Invested': invested,
        };
      });

      return {
        chartData: data,
        totalInvested,
        wealthGain,
        expectedAmount,
      };
    }, [monthlyInvestment, rateOfReturn, timePeriod]);

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)}Cr`;
    }
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)}L`;
    }
    return `₹${value.toLocaleString('en-IN')}`;
  };

  const chartConfig = {
    'Expected Amount': {
      label: 'Expected Amount',
      color: 'hsl(var(--chart-2))',
    },
    'Total Invested': {
      label: 'Total Invested',
      color: 'hsl(var(--chart-1))',
    },
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-center mb-8">SIP Calculator</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div>
              <Label
                htmlFor="monthly-investment"
                className="flex justify-between items-center"
              >
                <span>Monthly SIP Amount</span>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    id="monthly-investment"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) =>
                      setMonthlyInvestment(Number(e.target.value))
                    }
                    className="w-32 pl-7"
                    min={500}
                    max={1000000}
                  />
                </div>
              </Label>
              <Slider
                value={[monthlyInvestment]}
                onValueChange={(value) => setMonthlyInvestment(value[0])}
                min={500}
                max={1000000}
                step={500}
                className="mt-2"
              />
              <p className="text-xs text-muted-foreground text-right mt-1">
                (₹500 to ₹10 Lac)
              </p>
            </div>

            <div>
              <Label
                htmlFor="rate-of-return"
                className="flex justify-between items-center"
              >
                <span>Expected Rate of Returns (% PA)</span>
                <div className="relative">
                  <Input
                    id="rate-of-return"
                    type="number"
                    value={rateOfReturn}
                    onChange={(e) => setRateOfReturn(Number(e.target.value))}
                    className="w-24 pr-6"
                    min={1}
                    max={30}
                  />
                   <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    %
                  </span>
                </div>
              </Label>
              <Slider
                value={[rateOfReturn]}
                onValueChange={(value) => setRateOfReturn(value[0])}
                min={1}
                max={30}
                step={0.5}
                className="mt-2"
              />
               <p className="text-xs text-muted-foreground text-right mt-1">
                (1 to 30%)
              </p>
            </div>

            <div>
              <Label
                htmlFor="time-period"
                className="flex justify-between items-center"
              >
                <span>Investment Period (Years)</span>
                <div className="relative">
                  <Input
                    id="time-period"
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-24 pr-8"
                    min={1}
                    max={30}
                  />
                   <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    Yr
                  </span>
                </div>
              </Label>
              <Slider
                value={[timePeriod]}
                onValueChange={(value) => setTimePeriod(value[0])}
                min={1}
                max={30}
                step={1}
                className="mt-2"
              />
               <p className="text-xs text-muted-foreground text-right mt-1">
                (1 to 30 Yrs)
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground rounded-lg p-4 text-center mb-6">
              <div>
                <p className="text-sm opacity-80">Total Invested</p>
                <p className="font-bold text-lg md:text-xl">
                  {formatCurrency(totalInvested)}
                </p>
              </div>
              <div>
                <p className="text-sm opacity-80">Wealth Gain</p>
                <p className="font-bold text-lg md:text-xl">
                  {formatCurrency(wealthGain)}
                </p>
              </div>
              <div>
                <p className="text-sm opacity-80">Expected Amount</p>
                <p className="font-bold text-lg md:text-xl">
                  {formatCurrency(expectedAmount)}
                </p>
              </div>
            </div>
            <div className="flex-grow">
              <ChartContainer config={chartConfig} className="w-full h-[300px]">
                <ResponsiveContainer>
                  <LineChart data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="year"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => `${value}Y`}
                    />
                     <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => formatCurrency(Number(value))}
                        width={80}
                      />
                    <Tooltip
                      cursor={false}
                      content={<ChartTooltipContent
                          formatter={(value, name) => (
                              <div className="flex items-center">
                                  <div
                                      className="w-2.5 h-2.5 rounded-full mr-2"
                                      style={{ backgroundColor: chartConfig[name as keyof typeof chartConfig].color }}
                                  />
                                  <div className="flex justify-between w-full">
                                    <span>{chartConfig[name as keyof typeof chartConfig].label}:</span>
                                    <span className="font-bold ml-2">{formatCurrency(Number(value))}</span>
                                  </div>
                              </div>
                          )}
                           labelFormatter={(label) => `Year: ${label}`}
                      />}
                    />
                    <Line
                      dataKey="Total Invested"
                      type="monotone"
                      stroke="var(--color-Total Invested)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      dataKey="Expected Amount"
                      type="monotone"
                      stroke="var(--color-Expected Amount)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CalculatorsPage() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-left mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Calculators
          </h2>
        </div>
        <Tabs defaultValue="sip" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-4 bg-transparent p-0 border-b">
            <TabsTrigger value="sip" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">SIP Calculator</TabsTrigger>
            <TabsTrigger value="lumpsum" disabled className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
              Lumpsum Calculator
            </TabsTrigger>
            <TabsTrigger value="sip-goal" disabled className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
              SIP Goal Calculator
            </TabsTrigger>
            <TabsTrigger value="fd" disabled className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
              FD Calculator
            </TabsTrigger>
            <TabsTrigger value="rd" disabled className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
              RD Calculator
            </TabsTrigger>
            <TabsTrigger value="loan-emi" disabled className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent">
              Loan EMI Calculator
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sip">
            <SIPCalculator />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
